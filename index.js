let inputNome = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputMessage = document.getElementById("message");
const button = document.getElementById("send-button");
const inputs = document.querySelectorAll("#name", "#email", "#message");

function validaNome() {
  const namePattern = /^[A-Za-z]+\s[A-Za-z]+$/;
  if (!namePattern.test(inputNome.value)) {
    alert("Por favor, insira um nome com pelo menos duas palavras.");
  }
  inputNome = inputNome.value;
  return true;
}

function validaEmail() {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailPattern.test(inputEmail.value)) {
    alert("Por favor, insira um e-mail válido.");
  }
  inputEmail = inputEmail.value;
  return true;
}

function validaMessage() {
  if (inputMessage.value === "") {
    alert("Por favor, insira sua mensagem.");
  }
  inputMessage = inputMessage.value;
  return true;
}

function validaButton() {
  if (validaNome() && validaEmail() && validaMessage()) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", function () {
    if (validaNome() && validaEmail() && validaMessage()) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
}
