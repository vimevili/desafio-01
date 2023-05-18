"use strict";
const form = document.querySelector("#myForm");
const spans = document.querySelectorAll(".error");
const button = document.querySelector("#send-button");
const inputs = document.querySelectorAll(".inputs");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#message");
// funções de validação
function validaButton() {
    let checkboxesSelecionados = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => {
        const sibling = checkbox.nextElementSibling;
        return sibling ? sibling.textContent.trim() : "";
    });
    let checkboxValido = Array.from(checkboxes).some((checkbox) => checkbox.checked);
    let nomeValido = /^[A-Za-z]+\s[A-Za-z]+$/.test(nome.value);
    let emailValido = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.value);
    let mensagemValida = mensagem.value.trim().length > 20;
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
    button.disabled = !(checkboxValido &&
        nomeValido &&
        emailValido &&
        mensagemValida);
    armazenaDados(checkboxesSelecionados, nome, email, mensagem);
}
function armazenaDados(arg1, arg2, arg3, arg4) {
    const mensagemObj = {
        checkbox: arg1,
        nome: arg2.value,
        email: arg3.value,
        mensagem: arg4.value,
    };
    const mensagemJSON = JSON.stringify(mensagemObj);
    localStorage.setItem("formData", mensagemJSON);
}
// events
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", validaButton);
});
nome.addEventListener("input", validaButton);
email.addEventListener("input", validaButton);
mensagem.addEventListener("input", validaButton);
