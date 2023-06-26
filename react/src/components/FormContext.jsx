import React from 'react';

export const FormContext = React.createContext();

export const FormData = ({ children }) => {
  const [checkboxValido, setCheckboxValido] = React.useState(false);
  const [nomeValido, setNomeValido] = React.useState(false);
  const [emailValido, setEmailValido] = React.useState(false);
  const [mensagemValida, setMensagemValida] = React.useState(false);

  const [checkboxesSelecionados, setCheckboxesSelecionados] = React.useState(
    [],
  );

  const checkboxesRef = React.useRef([]);

  function onChangeCheckbox({ target }, id) {
    const isChecked = target.checked;

    if (isChecked) setCheckboxesSelecionados([...checkboxesSelecionados, id]);

    setCheckboxValido(checkboxesSelecionados.length > 0);
    return checkboxValido;
  }

  function onChangeNome({ value }) {
    setNomeValido(/^\w+\s+\w+/.test(value));
    return nomeValido;
  }
  function onChangeEmail({ value }) {
    setEmailValido(/^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value));
    return emailValido;
  }
  function onChangeMensagem({ value }) {
    setMensagemValida(value.trim().length > 20);
    return mensagemValida;
  }

  const inputs = [
    {
      placeholder: 'Your name',
      span: 'Provide at least your first and last name',
      spanClass: 'spanName',
      function: onChangeNome,
    },
    {
      placeholder: 'Your email',
      span: 'Insert a valid email!',
      spanClass: 'spanEmail',
      function: onChangeEmail,
    },
    {
      placeholder: 'Your message',
      span: 'Your message must be at least 20 characters long',
      spanClass: 'spanMessage',
      function: onChangeMensagem,
    },
  ];

  return (
    <FormContext.Provider
      value={{
        inputs,
        onChangeCheckbox,
        onChangeMensagem,
        onChangeEmail,
        onChangeNome,
        checkboxesRef,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormData;
