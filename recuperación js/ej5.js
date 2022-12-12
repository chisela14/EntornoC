// Realiza un formulario como el de la imagen. Tienes que realizar las validaciones siguientes:
// DNI (99.999.999-X)
// Nombre (Mínimo 1 nombre y 1 apellido, Máximo 2 nombre y 2 apellidos)
// Fecha de Nacimiento (dd/mm/yyyy): debe ser mayor de edad
// Email (xxxxxx@yyyyy.zzz)
// WEB (http://www.xxxx.yyy)
// Contraseña (Entre 8 y 10 carácteres)
// Valida también que no puedan dejarse los campos en blanco
// El campo número de hijos aparecerá solo cuando se haya marcado sí en la pregunta tiene hijos y solo admitirá valores entre 1 y 10.
// La validación se debe realizar poco a poco según el usuario vaya rellenado los campos.
// En caso de introducir un valor incorrecto se debe limpiar el campo.
// El botón comprobar no estará activo hasta que todos los campos sean correctos.


//recuperar el formulario y todos los elementos a validar
const form = document.querySelector("form");
const dniE = document.querySelector("#dni");
const nameE = document.querySelector("#name");
const dateE = document.querySelector("#date");
const childrenE = document.querySelector(".form-children"); 
const numChildrenE = document.querySelector("#numChildren");
const emailE = document.querySelector("#email");
const webE = document.querySelector("#web");
const passwordE = document.querySelector("#password");

//recoger el div de error donde se mostrarán los mensajes
const error = document.querySelector("#error");

//función para comprobar si un campo está en blanco, se va a utilizar en casi todos los elementos a validar
const isBlank = value => {
    if(value==='') return true;
    else return false;
}

//validaciones de los elementos
const numChildrenDiv = document.querySelector(".form-children-num");

const checkChildren = () => {
    let valid = false;
    let inputs = childrenE.querySelectorAll("input");
    for (let i=0;i<inputs.length;i++) {
        if (inputs[i].checked){
            valid = true; 
        }
    }
    if(!valid){
        error.textContent = "Debes seleccionar una opción";
    }
    return valid;
}

childrenE.addEventListener('change', function(){ //tiene que volver a desaparecer si cambia la opción a No?
    if(this.value = "y"){
        numChildrenDiv.style.visibility = "visible";   
    }
})

const checkNumChildren = () => {
    let valid = false;
    let numChildren = numChildrenE.value;
    if(isBlank(numChildren)){
        error.textContent = "El número de hijos no puede estar vacío";
    }else if (numChildren <= 0){
        error.textContent = "El número de hijos no puede ser menor o igual que 0";
    }else{
        valid = true;
    }
    
    return valid;
}

//escuchar evento input del formulario (delegación) para validar según se rellene

//escuchar evento submit del formulario para prevenir el por defecto y enviarlo si todas las validaciones devuelven true

