// Creación de usuarios con validación de diferentes campos.

//recuperar elementos a validar
let userEl = document.querySelector("#username");
let passwordEl = document.querySelector("#password");
let emailEl = document.querySelector("#email");
let dateEl = document.querySelector("#birthDate");

let form = document.querySelector("form");

//métodos para validar los diferentes campos
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

//comprobar los campos
function checkUsername(){
    let valid = false;
    const min = 3, max = 10;
    const username = userEl.value.trim();

    if (!isRequired(username)) {
        showError(userEl, 'El username no puede estar vacío');
    } else if (!isBetween(username.length, min, max)) {
        showError(userEl, `El username debe tener entre ${min} y ${max} caracteres`)
    } else {
        showSuccess(userEl);
        valid = true;
    }
    return valid;
}
function checkPassword(){
    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'La contraseña no puede estar vacía');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'La contraseña debe tener al menos 8 caracteres; incluyendo 1 minúscula, 1 mayúscula, 1 número, y 1 caracter especial(!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

//mostrar y eliminar mensaje de error
const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}