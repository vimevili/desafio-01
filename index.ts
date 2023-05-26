const form = document.querySelector("#myForm")! as HTMLFormElement;
const button = document.querySelector("#send-button")! as HTMLButtonElement;
const inputs = document.querySelectorAll(".inputs")!;
const spans = document.querySelectorAll('span')
const nome = document.querySelector("#name")! as HTMLInputElement;
const email = document.querySelector("#email")! as HTMLInputElement;
const mensagem = document.querySelector("#message")! as HTMLInputElement;
const checkboxes = document.querySelectorAll(
  'input[type="checkbox"]'
  )! as NodeListOf<HTMLInputElement>;
var checkboxesSelecionados: Set<string> = new Set<string>();
let mensagemJSON: string = "";

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
  return checkboxValido;
}
function validaNome(): boolean {
  let nomeValido: boolean = /^\w+\s+\w+/.test(nome.value);
  return nomeValido;
}
function validaEmail(): boolean {
  let emailValido: boolean =
  /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email.value);
  return emailValido;
}
function validaMensagem(): boolean {
  let mensagemValida: boolean = mensagem.value.trim().length > 20;
  return mensagemValida;
}

function validaButton(): boolean {
  let checkboxValido = validaCheckbox();
  let nomeValido = validaNome();
  let emailValido = validaEmail();
  let mensagemValida = validaMensagem();

  button.disabled = !(
    checkboxValido &&
    nomeValido &&
    emailValido &&
    mensagemValida);
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
  checkbox.addEventListener("change", () => {
  !validaCheckbox() ? mostraErro(1) : removeErro(1)
  validaButton();
})});
nome.addEventListener("input", () => {
  !validaNome() ? mostraErro(2) : removeErro(2)
  validaButton()
});

email.addEventListener("input", () => {
  !validaEmail() ? mostraErro(3) : removeErro(3)
  validaButton();
  });

mensagem.addEventListener("input", () => {
  !validaMensagem() ? mostraErro(4) : removeErro(4)
  validaButton()
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkboxesArray: string[] = Array.from(checkboxesSelecionados);

  if (validaButton()) {
    armazenaDados(checkboxesArray, nome, email, mensagem);
    window.location.href = "/assets/formData.html";
  }
});

function mostraErro(index: number) {
  spans[index].style.display = 'inline-block';
}
function removeErro(index: number) {
  spans[index].style.display = 'none';
}