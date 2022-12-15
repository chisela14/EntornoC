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
// const childrenE = document.querySelector(".form-children"); 
const childrenE = document.querySelectorAll("#children"); //dos input
const numChildrenE = document.querySelector("#numChildren");
const emailE = document.querySelector("#email");
const webE = document.querySelector("#web");
const passwordE = document.querySelector("#password");

//recoger el div de error donde se mostrarán los mensajes
const error = document.querySelector("#error");
//div de información para ver los campos correctos (hecho para mí para comprobar ya que el formulario no envía a ningún lado)
const info = document.querySelector("#info");

//función para comprobar si un campo está en blanco, se va a utilizar en casi todos los elementos a validar
const isBlank = value => {
    if(value==='') return true;
    else return false;
}

//validaciones de los elementos
const isDniValid = (dni) => {
    const regexp = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[A-Z]$/i; // /   / limitan la expresión ^indica donde empieza $donde acaba
    return regexp.test(dni);
}

const checkDni = () => {
    let valid = false;
    let dni = dniE.value.trim();
    if(isBlank(dni)){
        error.textContent = "El DNI no puede estar vacío";
        dniE.value = "";
    }else if(!isDniValid(dni)){
        error.textContent = "El DNI introducido no es válido(99.999.999-X)";
        dniE.value = "";
    }else{
        valid = true;
        error.textContent = "";
        info.textContent += `DNI correcto\n`;
    }
    return valid;
}

const checkName = () => {
    let valid = false;
    let name = nameE.value.trim();
    if(isBlank(name)){
        error.textContent = "El nombre no puede estar vacío";
        nameE.value = "";
    }else{
        let numWords = name.split(" ");
        console.log(numWords.length);
        if(numWords.length > 1 && numWords.length < 5){
            valid = true;
            error.textContent = "";
            info.textContent += "Nombre correcto\n";
        }else{
            error.textContent = "Debe introducir un mínimo dos palabras y un máximo de cuatro en el campo 'Nombre'";
            nameE.value = "";
        }
    }

    return valid;
}

const checkDate = () => {
    let valid = false;
    let date = dateE.value;
    if(isBlank(date)){
        error.textContent = "La fecha de nacimiento no puede estar vacía";
        dateE.value = "";
    }else{
        date = new Date(date);
        let minDate = new Date();
        minDate = minDate.setFullYear(minDate.getFullYear()-18);
        if(date>minDate){
            error.textContent = "Debes ser mayor de 18 para poder registrarte";
            dateE.value = "";
        }else{
            valid = true;
            error.textContent = "";
            info.textContent += `Fecha de nacimiento correcta\n`;
        }
    } 
    return valid;
}

const numChildrenDiv = document.querySelector(".form-children-num");

const checkChildren = () => {
    let valid = false;
    // let inputs = childrenE.querySelectorAll("input");
    for (let i=0;i<childrenE.length;i++) {//inputs.length
        if (childrenE[i].checked){
            valid = true; 
            error.textContent = "";
        }
    }
    //poniendo checked en no siemre va a haber algo seleccionado
    // if(!valid){
    //     error.textContent = "Debes seleccionar una opción";
    // }
    return valid;
}

const childrenDiv = document.querySelector(".form-children"); 
childrenDiv.addEventListener('click', (e)=> { 
    if(e.target.value == "y"){
        numChildrenDiv.hidden = false;   
    }else if(e.target.value == "n"){
        numChildrenDiv.hidden = true;  
    }
})

const checkNumChildren = () => {
    let valid = false;
    //si el div está en invisible valid será true para validar el formulario completo
    if(numChildrenDiv.hidden){
        valid = true;
        info.textContent += `Nº hijos escondidos\n`;
    }else{
        let numChildren = numChildrenE.value;
        if(isBlank(numChildren)){
            error.textContent = "El número de hijos no puede estar vacío";
            numChildrenE.value = "";
        }else if (numChildren <= 0 || numChildren > 10){
            error.textContent = "El número de hijos no puede ser menor o igual que 0, ni mayor de 10";
            numChildrenE.value = "";
        }else{
            valid = true;
            error.textContent = "";
            info.textContent += `Nº hijos correcto\n`;
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
        error.textContent = "El email no puede estar vacío";
        emailE.value = "";
    }else if(!isEmailValid(email)){
        error.textContent = `El email ${email} no es válido`;
        emailE.value = "";
    }else{
        valid = true;
        error.textContent = "";
        info.textContent += `Email correcto\n`;
    }
    return valid;
}

const isWebValid = (web) => {
    const regexp = /^http:\/\/[a-z]{3}.[a-z]{4}.[a-z]{3}$/i;
    return regexp.test(web);
}
const checkWeb = () => {
    let valid = false;
    let web = webE.value.trim();
    if(isBlank(web)){
        error.textContent = "La página web no puede estar vacía";
        webE.value = "";
    }else if(!isWebValid(web)){
        error.textContent = "La página web no tiene un formato correcto";
        webE.value = "";
    }else{
        valid = true;
        error.textContent = "";
        info.textContent += `Web correcta\n`;
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
        passwordE.value = "";
    }else if(password.length<min || password.length>max){
        error.textContent = `La contraseña debe estar entre ${min} y ${max} caracteres`;
        passwordE.value = "";
    }else{
        valid = true;
        error.textContent = "";
        info.textContent += `Contraseña correcta\n`;
    }
    return valid;
}

//función para retrasar las validaciones
const debounce = (fn, delay = 2000) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

//escuchar evento input del formulario (delegación) para validar según se rellene
form.addEventListener('input', debounce(function(e) {
    switch(e.target.id){
        case 'dni':
            checkDni(); // isFormValid.dni = checkDni();
            break;
        case 'name':
            checkName();
            break;
        case 'date':
            checkDate;
            break;
        case 'children':
            checkChildren();
            break;
        case 'numChildren':
            checkNumChildren();
            break;
        case 'email':
            checkEmail();
            break;
        case 'web':
            checkWeb();
            break;
        case 'password':
            checkPassword();
            break;
    }
}))

// Prevenir envío del botón, en este caso no hace falta porque se validan todos los campos cuando se rellenan
//variable para guardar el resultado de las comprobaciones
// const isFormValid = {
//     dni: false,
//     name: false,
//     date: false,
//     children: false,
//     numChildren: false,
//     email: false,
//     web: false,
//     password: false 
// }
// //escuchar evento submit del formulario para prevenir el por defecto y enviarlo si todas las validaciones devuelven true
// form.addEventListener('submit', function (e){
//     e.preventDefault();
//     const formValues = Object.values(isFormValid);
//     const valid = formValues.findIndex(value => value == false);
//     if (valid == -1) {
//         e.submit();
//     }
// })
