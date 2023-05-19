const form = document.querySelector("#myForm")! as HTMLFormElement;
const spans = document.querySelectorAll(".error")!;
const button = document.querySelector("#send-button")! as HTMLButtonElement;
const inputs = document.querySelectorAll(".inputs")!;
const checkboxes = document.querySelectorAll(
  'input[type="checkbox"]'
)! as NodeListOf<HTMLInputElement>;
let mensagemJSON: string = "";

const nome = document.querySelector("#name")! as HTMLInputElement;
const email = document.querySelector("#email")! as HTMLInputElement;
const mensagem = document.querySelector("#message")! as HTMLInputElement;
let checkboxesSelecionados: string[] = [];

// funções de validação
function validaButton() {
  checkboxesSelecionados = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => {
      const sibling = checkbox.nextElementSibling;
      return sibling ? sibling.textContent!.trim() : "";
    });

  let checkboxValido: boolean = Array.from(checkboxes).some(
    (checkbox) => checkbox.checked
  );
  let nomeValido: boolean = /^\w+\s+\w+/.test(nome.value);
  let emailValido: boolean =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.value);
  let mensagemValida: boolean = mensagem.value.trim().length > 20;

  if (!checkboxValido) {
    checkboxValido = false;
  }

  if (!nomeValido) {
    nomeValido = false;
  }

  if (!emailValido) {
    emailValido = false;
  }

  if (!mensagemValida) {
    mensagemValida = false;
  }

  button.disabled = !(
    checkboxValido &&
    nomeValido &&
    emailValido &&
    mensagemValida
  );
  armazenaDados(checkboxesSelecionados, nome, email, mensagem);
}

function armazenaDados(
  arg1: string[],
  arg2: HTMLInputElement,
  arg3: HTMLInputElement,
  arg4: HTMLInputElement
) {
  const mensagemObj = {
    checkbox: arg1.toString,
    nome: arg2.value,
    email: arg3.value,
    mensagem: arg4.value,
  };
  mensagemJSON = JSON.stringify(mensagemObj);
  localStorage.setItem("formData", mensagemJSON);
}

// events

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", validaButton);
});
nome.addEventListener("input", validaButton);
email.addEventListener("input", validaButton);
mensagem.addEventListener("input", validaButton);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "/assets/index2.html";
});
