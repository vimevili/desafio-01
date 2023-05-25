"use strict";
const form = document.querySelector("#myForm");
const button = document.querySelector("#send-button");
const inputs = document.querySelectorAll(".inputs");
let mensagemJSON = "";
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#message");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
var checkboxesSelecionados = new Set();
// funções de validação
function validaCheckbox() {
    checkboxes.forEach((elemento) => {
        if (elemento.checked) {
            checkboxesSelecionados.add(elemento.value);
        }
    });
    let checkboxValido = Array.from(checkboxes).some((checkbox) => checkbox.checked);
    return checkboxValido;
}
function validaNome() {
    let nomeValido = /^\w+\s+\w+/.test(nome.value);
    return nomeValido;
}
function validaEmail() {
    let emailValido = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email.value);
    return emailValido;
}
function validaMensagem() {
    let mensagemValida = mensagem.value.trim().length > 20;
    return mensagemValida;
}
function validaButton() {
    let checkboxValido = validaCheckbox();
    let nomeValido = validaNome();
    let emailValido = validaEmail();
    let mensagemValida = validaMensagem();
    button.disabled = !(checkboxValido &&
        nomeValido &&
        emailValido &&
        mensagemValida);
    return true;
}
function armazenaDados(arg1, arg2, arg3, arg4) {
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
    const checkboxesArray = Array.from(checkboxesSelecionados);
    if (validaButton()) {
        armazenaDados(checkboxesArray, nome, email, mensagem);
        window.location.href = "/assets/formData.html";
    }
});
