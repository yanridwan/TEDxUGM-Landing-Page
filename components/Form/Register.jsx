import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { collection } from "@firebase/firestore";
import { addDoc } from "firebase/firestore"; 
import Swal from "sweetalert2";

import InputField from "./InputField";
import { biodataInputTextForms, tedxRelatedForms } from "./RegistrationFormTemplate";
import Firebase from "../../common/firebase";

export default function Register() {
  const [isAlreadyFill, setIsAlreadyFill] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const getFormId = (id) => {
    let formId = "";

    let formIdSplit = (id).split("-");

    if (formIdSplit.length > 1) {
      formId = formIdSplit[0] + (formIdSplit[1].charAt(0).toUpperCase() + formIdSplit[1].slice(1));
    } else {
      formId = formIdSplit[0]
    }

    return formId;
  };

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    setLoading(true);

    let data = {
      biodata: {},
      tedxRelated: {},
      createdAt: new Date()
    };

    await biodataInputTextForms.forEach((form) => {
      data.biodata[getFormId(form.id)] = event.target[form.id].value;
    });

    await tedxRelatedForms.forEach((form) => {
      data.tedxRelated[getFormId(form.id)] = event.target[form.id].value;
    });

    const _register = await collection(Firebase.firestore, "registration");

    await addDoc(_register, data).then((ref) => {
      Swal.fire("Notification", "Registration success! Please wait for information from TEDx UGM Team", "success");
      setIsAlreadyFill(true);
      console.log(ref.id)
    }).catch((err) => {
      Swal.fire("Notification", "Registration failed. Please registration again. If the problem still exist, please contact us to help.", "danger");
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <RegisterContainer isDarkMode={false}>
      { isAlreadyFill ? (
        <div>
          <p className='appreciation-text'>
            Thank you for register! Please wait for next announcement from us.
          </p>
          <p className='refill-text'>
            Want to refill register? Click <strong onClick={() => setIsAlreadyFill(false)} className="text-maroon-red cursor-pointer">here</strong>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Fade zoom>
            <div className="form-container biodata-form">
              <h2 className="form-title">Biodata</h2>

              {biodataInputTextForms.map((form, i) => (
                <InputField {...form} key={`form-${i}`} />
              ))}
            </div>
          </Fade>

          <Fade zoom>
            <div className="form-container tedx-related-form">
              <h2 className="form-title">TEDx Related Question</h2>
              
              {tedxRelatedForms.map((form, i) => (
                <InputField {...form} index={i} key={`form-${i}`} />
              ))}
            </div>
          </Fade>

          <Fade bottom>
            {!loading ? (
              <button type="submit" className='register-submit'>Register TEDx UGM</button>
            ) : (
              <button className='register-submit' disabled>Processing Registration...</button>
            )}
          </Fade>
        </form>
      )}
    </RegisterContainer>
  )
}

const RegisterContainer = styled.div`
  .appreciation-text {
    text-align: center;
    font-size: 1.15rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .refill-text {
    text-align: center;
    font-size: 0.95rem;
  }

  .form-container {
    background-color: rgba(12, 38, 56, 0.67);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.17 );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1.5rem;
    max-width: 768px;
    margin: 2rem auto;
    border-radius: 1.25rem;

    .form-title {
      font-size: 1.75rem;
    }
  }

  .register-submit { 
    width: 100%;
    max-width: 768px;
    background-color: var(--color-red);
    display: block;
    margin: 0 auto;
    border-radius: 1rem;
    border: 0;
    outline: 0;
    cursor: pointer;
    padding: 0.75rem;
    font-size: 1.25rem;
    font-family: 'Montserrat';
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      background-color: #8f0404;
    }

    &:disabled {
      cursor: not-allowed;
      background:  #750404;
      opacity: 0.7;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
1