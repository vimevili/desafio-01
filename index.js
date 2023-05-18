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

// events
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validaButton();
  alert("Formulário enviado com sucesso!");
  form.reset();
});

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", checkboxListener);
});
nome.addEventListener("input", nomeListener);
email.addEventListener("input", emailListener);
console.log(mensagem.addEventListener("input", messageListener));

// funções de evento
function checkboxListener() {
  validaCheckbox();
  validaButton();
}

function nomeListener() {
  validaNome();
  validaButton();
}

function emailListener() {
  validaEmail();
  validaButton();
}

function messageListener() {
  validaMessage();
  validaButton();
}

// funções de validação
function validaCheckbox() {
  let checkedCount = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
    if (checkedCount === 0) {
      spans[0].style.display = "block";
      return false;
    } else {
      spans[0].style.display = "none";
      return true;
    }
  });
}

function validaNome() {
  const namePattern = /^[A-Za-z]+\s[A-Za-z]+$/;
  if (!namePattern.test(nome.value)) {
    mostraErro(0);
    return false;
  } else {
    removerErro(0);
    return true;
  }
}

function validaEmail() {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    mostraErro(1);
    return false;
  } else {
    removerErro(1);
    return true;
  }
}

function validaMessage() {
  if (mensagem.value.length < 20) {
    mostraErro(2);
    return false;
  } else {
    removerErro(2);
    return true;
  }
}

function validaButton() {
  if (validaCheckbox() && validaNome() && validaEmail() && validaMessage()) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
}

// funções de erro
function mostraErro(index) {
  inputs[index].classList.add("error-input");
  spans[index + 1].style.display = "block";
}

function removerErro(index) {
  inputs[index].classList.remove("error-input");
  spans[index + 1].style.display = "none";
}
