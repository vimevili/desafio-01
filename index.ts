const form = document.querySelector("#myForm")! as HTMLFormElement;
const button = document.querySelector("#send-button")! as HTMLButtonElement;
const inputs = document.querySelectorAll(".inputs")!;
let mensagemJSON: string = "";

const nome = document.querySelector("#name")! as HTMLInputElement;
const email = document.querySelector("#email")! as HTMLInputElement;
const mensagem = document.querySelector("#message")! as HTMLInputElement;
const checkboxes = document.querySelectorAll(
  'input[type="checkbox"]'
)! as NodeListOf<HTMLInputElement>;
var checkboxesSelecionados: Set<string> = new Set<string>();

// funções de validação
function validaCheckbox(): boolean {
  checkboxes.forEach((elemento: HTMLInputElement) => {
    if (elemento.checked) {
      checkboxesSelecionados.add(elemento.value);
    }
  });
  let checkboxValido: boolean = Array.from(checkboxes).some(
    (checkbox) => checkbox.checked
  );
  if (!checkboxValido) {
    checkboxValido = false;
  }
  return checkboxValido;
}
function validaNome(): boolean {
  let nomeValido: boolean = /^\w+\s+\w+/.test(nome.value);
  if (!nomeValido) {
    nomeValido = false;
  }
  return nomeValido;
}
function validaEmail(): boolean {
  let emailValido: boolean =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.value);
  if (!emailValido) {
    emailValido = false;
  }
  return emailValido;
}
function validaMensagem(): boolean {
  let mensagemValida: boolean = mensagem.value.trim().length > 20;
  if (!mensagemValida) {
    mensagemValida = false;
  }
  return mensagemValida;
}

function validaButton() {
  let checkboxValido = validaCheckbox();
  let nomeValido = validaNome();
  let emailValido = validaCheckbox();
  let mensagemValida = validaMensagem();

  button.disabled = !(
    checkboxValido &&
    nomeValido &&
    emailValido &&
    mensagemValida
  );
  return true;
}

function armazenaDados(
  arg1: string[],
  arg2: HTMLInputElement,
  arg3: HTMLInputElement,
  arg4: HTMLInputElement
) {
  const mensagemObj = {
    checkboxes: arg1,
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
  const checkboxesArray: string[] = Array.from(checkboxesSelecionados);

  if (validaButton()) {
    armazenaDados(checkboxesArray, nome, email, mensagem);
    window.location.href = "/assets/index2.html";
  }
});
