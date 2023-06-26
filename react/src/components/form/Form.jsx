import React from 'react';
import Checkboxes from './Checkboxes';
import Input from './Input';
import styles from './Form.module.css';
import Spans from './Spans';
import { FormContext } from '../FormContext';

const Form = () => {
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const formData = React.useContext(FormContext);
  function handleSubmit(event) {
    event.preventDefault();

    const checkboxValido = formData.onChangeCheckbox();
    const nomeValido = formData.onChangeNome();
    const emailValido = formData.onChangeEmail();
    const mensagemValida = formData.onChangeMensagem();
    const buttonDisabled = !(
      checkboxValido &&
      nomeValido &&
      emailValido &&
      mensagemValida
    );
    setIsButtonDisabled(buttonDisabled);
  }

  return (
    <>
      <Checkboxes />
      <form onSubmit={handleSubmit}>
        <ul className={styles.inputsContainer}>
          {formData.inputs.map((input, index) => (
            <li key={index}>
              <Input
                placeholder={input.placeholder}
                onChange={index.function}
              />
              <Spans spanClass={input.spanClass} span={input.span} />
            </li>
          ))}
          <button className={styles.button} disabled={isButtonDisabled}>
            <img src="src/assets/img/send.svg" alt="" />
            Send Message
          </button>
        </ul>
      </form>
    </>
  );
};

export default Form;
