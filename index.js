const form = document.querySelector("#myForm");
const spans = document.querySelectorAll(".error");
const button = document.querySelector("#send-button");
const inputs = document.querySelectorAll(".inputs");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#message");

inputs[0].addEventListener("input", validaNome);
inputs[1].addEventListener("input", validaEmail);
inputs[2].addEventListener("input", validaMessage);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validaButton()) {
    alert("Formulário enviado com sucesso!");
    formulario.reset();
  }
});

function validaCheckbox() {
  let checkedCount = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  if (checkedCount === 0) {
    spans[0].style.display = "block";
    return false;
  }
  spans[0].style.display = "none";
  return true;
}

function validaNome() {
  const namePattern = /^[A-Za-z]+\s[A-Za-z]+$/;
  if (!namePattern.test(nome.value)) {
    mostraErro(0);
  } else {
    removerErro(0);
    return true;
  }
}

function validaEmail() {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    mostraErro(1);
  } else {
    removerErro(1);
    return true;
  }
}

function validaMessage() {
  if (mensagem.value.length < 20) {
    mostraErro(2);
  } else {
    removerErro(2);
    return true;
  }
}

function validaButton() {
  const checkboxValido = validaCheckbox();
  const nomeValido = validaNome();
  const emailValido = validaEmail();
  const mensagemValida = validaMessage();

  const isValid = checkboxValido && nomeValido && emailValido && mensagemValida;

  if (isValid) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  return isValid;
}

function mostraErro(index) {
  inputs[index].classList.add("error-input");
  spans[index + 1].style.display = "block";
}

function removerErro(index) {
  inputs[index].classList.remove("error-input");
  spans[index + 1].style.display = "none";
}
