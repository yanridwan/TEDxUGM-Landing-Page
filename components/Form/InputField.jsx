import Fade from "react-reveal/Fade";
import styled from 'styled-components';

export default function InputField(props) {
  const { id, label, desc, isRequired, type, textType, index, options } = props;

  const textareaKeyupHandler = (ref) => {
    const maxLength =  ref.target.getAttribute("maxlength");
    const currentLength = ref.target.value.length;

    const targetClasses = ref.target.getAttribute("class");
    const targetIndex = targetClasses.split(" ")[1].split("-")[2];

    const inputTextareaLengthStatus = document.querySelector(`.input-textarea-${targetIndex}-status`);

    inputTextareaLengthStatus.querySelector(".counter").innerHTML = maxLength - currentLength;

    if (currentLength == maxLength) {
      inputTextareaLengthStatus.classList.add("text-danger", "font-weight-bold");
    } else {
      inputTextareaLengthStatus.classList.remove("text-danger", "font-weight-bold");
    }
  }

  const renderInputField = (type) => {
    switch(type) {
      case "text":
        return (
          <input id={id} type={textType} name={id} required={isRequired} className="input-field" placeholder="Input your answer here . . ." />
        )
      case "textarea":
        return (
          <div className='textarea-container'>
            <textarea id={id} name={id} onKeyUp={textareaKeyupHandler} rows="10" required={isRequired} maxLength={500} placeholder="Input your answer here . . ." className={`input-field input-textarea-${index}`}></textarea>
            <p className={`input-textarea-${index}-status textarea-length-status`}>
              <span className="counter">500</span> characters left.
            </p>
          </div>
        )
      case "radio":
        return (
          <div className="input-radio-container">
            {options.map((option, i) => (
              <label key={i}>
                <input name={id} type="radio" value={option} required={isRequired} className="input-radio" />
                {option}
              </label>
            ))}
          </div>
        )
    }
  }

  return (
    <InputFieldContainer>
      <Fade bottom cascade>
        <div className="form-group">
          <label htmlFor={id}>
            { isRequired ? (
              <>
                { label }
                <span className='required-symbol'> * </span>
              </>
            ) : (
              label
            )}
          </label>

          { desc && (
            <p className="input-desc">
              { desc }
            </p>
          )}

          {renderInputField(type)}
        </div>
      </Fade>
    </InputFieldContainer>
  )
}

const InputFieldContainer = styled.div`
  .form-group {
      display: flex;
      flex-direction: column;
      margin: 1.5rem 0;

      label {
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 0.35rem;
      }

      .required-symbol {
        font-size: 1.25rem;
        color: red;
        font-weight: bold;
      }

      .input-desc {
        font-size: 0.75rem;
        text-align: justify;
      }

      .input-field {
        font-family: "Montserrat";
        margin: 0.75rem 0;
        padding: 0.75rem 1.15rem;
        border-radius: 1.25rem;
        width: 100%;
        outline: none;
        border: none;
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(32px);
        -webkit-backdrop-filter: blur(32px);
        color: var(--color-blue-maroon);
        font-size: 15px;
        font-weight: 500;
      }

      .textarea-length-status {
        font-size: 0.7rem;
      }

      .input-radio-container {
        margin: 0.75rem 0;
        display: flex;
        flex-direction: column;

        label {
          font-weight: 400;
        }
      }

      .input-radio {
        margin-top: 0.35rem;
        margin-bottom: 0.35rem;
        margin-right: 0.65rem;
        outline: none;

        &:checked {
          accent-color: var(--color-red);
          border: 0;
        }
      }
    }
`;