import styled from 'styled-components';
import Layout from '../../components/Layouts/Layout';
import RegisterForm from "../../components/Form/Register";

export default function Register() {
  const disclaimers = [
    "By registering as TEDxUGM 2022 attendees you are permitting all the data filled in this form to be processed and shared by TEDxUGM committee.",
    "There will be selection for the attendees applicants, since we have limited seats of 100 attendees.",
    "Only the selected applicants will pay a fee of Rp 150.000,00 for operational cost.",
    "The required fee of Rp 150.000,00 will provide each of the attendees with insightful experience from amazing speakers, chances to connect with other attendees, engaging and exciting TEDxUGM 2022 experience zone, exclusive TEDxUGM 2022 merchandise, certificate, and consumption (main course, snack, and beverage)."
  ];

  return (
    <RegisterContainer>
      <section id="registry">
        <div className="container">
          <div className="registry-explanation-container">
            <div>
              <h2 className="title text-maroon-red">TEDx UGM 2022 Attendees Registration</h2>

              <p className="desc">
                Thank you for your interest to register yourself to the Main Event TEDxUniversitasGadjahMada 2022. In this form, we have some questions that will help us to get to know you better. <br />
                <br />
                You might answer the questions in English or in Bahasa Indonesia. <br />
                <br />
                In line with the TEDx goal, TEDx UGM aspires to spread a wide range of topics in the talks that are going to take place in the event. This talk will be attended by 100 selected participants comprised of those who are capable to spread the ideas shared in this event to the society. Therefore, this event will provide high quality talks with capable speakers that have a lot of experience in their field. <br />
                <br />
                This event will be held at <strong>May 28th, 2022</strong> located in <strong>Auditorium Soegondo Fakultas Ilmu Budaya Universitas Gadjah Mada</strong>.<br />
                <br />
                For more information, feel free to contact either one of us through: <br />
                <strong>Whatsapp</strong>: +628882733970 (Chega) <br />
                <strong>Line</strong>: christojunior (Christo) <br />
                <br />
                <strong>Ideas Worth Spreading</strong>
              </p>
            </div>

            <div>
              <h2 className="title text-maroon-red">Disclaimer (Read Carefully)</h2>

              <ol className='disclaimer-list'>
                {disclaimers.map((disclaimer, i) => (
                  <li key={`${disclaimer}-${i}`}>
                    {disclaimer}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="registry-form-container">
            <h3 className="title">Registry <span className="text-maroon-red">Form</span></h3>

            <RegisterForm />
          </div>
        </div>
      </section>
    </RegisterContainer>
  )
}

Register.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

const RegisterContainer = styled.div`
  .registry-explanation-container {
    .title {
      margin-bottom: 0.75rem;
    }

    .desc {
      text-align: justify;
    }

    > div {
      margin-bottom: 2rem;
    }

    .disclaimer-list {
      padding-left: 40px;
      li {
        list-style: decimal;
        margin-bottom: 0.5rem;
        text-align: justify;
      }
    }
  }

  .registry-form-container {
    .title {
      text-align: center;
    }
  }
`