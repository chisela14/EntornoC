//campo nombre
let nombre = document.getElementById("nombre");
nombre.addEventListener('input', validarTexto);

function validarTexto(event){
    if(event.validity.rangeUnderflow){
        event.setCustomValidity("El nombre es demasiado corto");
    }else{
        event.setCustomValidity("");
    }
}

//campo género
let generos = document.querySelector("[name='genero']");

//campo fecha

//campo email
let email = document.getElementById("mail");
email.addEventListener("input", validarEmail);

function validarEmail(event){
  if (email.validity.typeMismatch) {
    email.setCustomValidity("No se ha introducido una dirección de correo electrónico");
  } else {
    email.setCustomValidity("");
  }
};

//botón