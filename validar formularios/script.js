//Funciones genéricas para comprobar validez
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const isCheckedRadio = radios => {
  let valid=false;
  for (let i=0;i<radios.length;i++) {
      if (radios[i].checked){
          valid = true;  
      }
  }
  return valid;
}

//Recuperar Elementos a validar
const Enombre = document.getElementById("name");
const generos = document.querySelectorAll("[name='genero']");
const Efecha = document.querySelector("#fecha");
const Eemail = document.getElementById("mail");
const form = document.querySelector("form");

//funciones para validar cada elemento
const checkName = () => {
  let valid = false;
  const min = 10, max = 50;
  const nombre = Enombre.value.trim();

  if (!isRequired(nombre)) {
      showError(Enombre, 'El nombre no puede estar vacío.');
  } else if (!isBetween(nombre.length, min, max)) {
      showError(Enombre, `El nombre completo debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(Enombre);
      valid = true;
  }
  return valid;
};
//mostrar y quitar error
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

//delegar evento de input en todos los elementos del formulario
form.addEventListener("input", (event)=>{
  switch(event.target.name){
    case "name":
      checkName();
      break;
      case "name":
      checkName();
      break;
      case "name":
      checkName();
      break;
  }
})


