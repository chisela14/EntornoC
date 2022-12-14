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
const isDniValid = (dni) => {
    const regexp = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[A-Z]$/i; 
    return regexp.test(dni);
}

const checkDni = () => {
    let valid = false;
    let dni = dniE.value.trim();
    if(isBlank(dni)){
        error.textContent = "El DNI no puede estar vacío";
        dni.textContent = "";
    }else if(!isDniValid(dni)){
        error.textContent = "El DNI introducido no es válido(99.999.999-X)"
    }else{
        valid = true;
        error.textContent = "";
    }
    return valid;
}

const checkName = () => {
    let valid = false;
    let name = nameE.value.trim();
    if(isBlank(name)){
        error.textContent = "El nombre no puede estar vacío";
    }else{
        let numWords = name.split(" ");
        console.log(numWords.length);
        if(numWords.length > 1 && numWords.length < 5){
            valid = true;
            error.textContent = "";
        }else{
            error.textContent = "Debe introducir un mínimo dos palabras y un máximo de cuatro en el campo 'Nombre'";
        }
    }

    return valid;
}

const checkDate = () => {
    let valid = false;
    let date = dateE.value;
    if(isBlank(date)){
        error.textContent = "La fecha de nacimiento no puede estar vacía";
    }else{
        date = new Date(date);
        let minDate = new Date();
        minDate = minDate.setFullYear(minDate.getFullYear()-18);
        if(date>minDate){
            error.textContent = "Debes ser mayor de 18 para poder registrarte";
        }else{
            valid = true;
            error.textContent = "";
        }
    } 
    return valid;
}

const numChildrenDiv = document.querySelector(".form-children-num");

const checkChildren = () => {
    let valid = false;
    let inputs = childrenE.querySelectorAll("input");
    for (let i=0;i<inputs.length;i++) {
        if (inputs[i].checked){
            valid = true; 
            error.textContent = "";
        }
    }
    if(!valid){
        error.textContent = "Debes seleccionar una opción";
    }
    return valid;
}

childrenE.addEventListener('change', function(){ //tiene que volver a desaparecer si cambia la opción a No?
    if(this.value == "y"){
        numChildrenDiv.style.visibility = "visible";   
    }else{
        numChildrenDiv.style.visibility = "hidden";  
    }
})

const checkNumChildren = () => {
    let valid = false;
    //si el div está en invisible valid será true para validar el formulario completo
    if(numChildrenDiv.style.visibility == "hidden"){
        valid = true;
    }else{
        let numChildren = numChildrenE.value;
        if(isBlank(numChildren)){
            error.textContent = "El número de hijos no puede estar vacío";
        }else if (numChildren <= 0){
            error.textContent = "El número de hijos no puede ser menor o igual que 0";
        }else{
            valid = true;
            error.textContent = "";
        } 
    }
    return valid;
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkEmail = () => {
    let valid = false;
    let email = emailE.value.trim();
    if(isBlank(email)){
        error.textContent = "El email no puede estar vacío"
    }else if(!isEmailValid(email)){
        error.textContent = `El email ${email} no es válido`
    }else{
        valid = true;
        error.textContent = "";
    }
    return valid;
}

const checkWeb = () => {
    let valid = false;
    let web = webE.value.trim();
    if(isBlank(web)){
        error.textContent = "La página web no puede estar vacía";
    }else{
        valid = true;
        error.textContent = "";
    }
    return valid;
}

const checkPassword = () => {
    let valid = false;
    let password  = passwordE.value.trim();
    const min = 6; //en la imagen pone un valor y en la descripción otro
    const max = 8;
    if(isBlank(password)){
        error.textContent = "La contraseña no puede estar vacía";
    }else if(password.length<min || password.length>max){
        error.textContent = `La contraseña debe estar entre ${min} y ${max} caracteres`;
    }else{
        valid = true;
        error.textContent = "";
    }
    return valid;
}

//variable para guardar el resultado de las comprobaciones
const isFormValid = {
    dni: false,
    name: false,
    date: false,
    children: false,
    numChildren: false,
    email: false,
    web: false,
    password: false 
}

//escuchar evento input del formulario (delegación) para validar según se rellene
form.addEventListener('input', function(e) {
    switch(e.target.id){
        case 'dni':
            isFormValid.dni = checkDni();
            break;
        case 'name':
            isFormValid.name =checkName();
            break;
        case 'date':
            isFormValid.date = checkDate;
            break;
        case 'children':
            isFormValid.children = checkChildren();
            break;
        case 'numChildren':
            isFormValid.numChildren = checkNumChildren();
            break;
        case 'email':
            isFormValid.email = checkEmail();
            break;
        case 'web':
            isFormValid.web = checkWeb();
            break;
        case 'password':
            isFormValid.password = checkPassword();
            break;
    }
})

//escuchar evento submit del formulario para prevenir el por defecto y enviarlo si todas las validaciones devuelven true
form.addEventListener('submit', function (e){
    e.preventDefault();
    const formValues = Object.values(isFormValid);
    const valid = formValues.findIndex(value => value == false);
    if (valid == -1) {
        e.submit();
    }
})
