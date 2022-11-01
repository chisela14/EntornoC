//Ejercicio 1
let box = document.getElementById("box");

box.addEventListener("mouseenter", verde);
function verde(){
    box.style.background="green";
}

box.addEventListener("mouseleave", rojo);
function rojo(){
    box.style.background="red";
}

box.addEventListener("mousedown", pulsar);
function pulsar(){
    console.log("Has pulsado la caja");
}

box.addEventListener("mouseup", dejarPulsar);
function dejarPulsar(){
    console.log("Has soltado el botón izquierdo dentro de la caja");
}

//Ejercicio 2

let texto = document.getElementById("2");

// texto.addEventListener("keydown", tecla);
// function tecla(){
//     console.log("Has pulsado una tecla");
// }

// texto.addEventListener("keyup", dejarTecla);
// function dejarTecla(){
//     console.log("Has soltado una tecla");
// }

texto.addEventListener("keydown", e =>{//e de evento (mejor escribir event)
    tecla(e);
})
function tecla(tecla){
    console.log("Has pulsado la tecla " + tecla.key);
}

texto.addEventListener("keyup", e=>{
    dejarTecla(e);
});
function dejarTecla(tecla){
    console.log("Has soltado la tecla " + tecla.key);
}

//Ejercicio 3
let boton = document.getElementById("boton");
boton.addEventListener("click", disparaEvento);
function disparaEvento(){
    let inputForm = document.querySelector("form input");
    inputForm.addEventListener("keyup", e=>{
        console.log(e.key);
    });
}

//Delegación de eventos
let numeros = document.getElementById("numbers");
numeros.addEventListener("mouseover", (event)=>{
    if(event.target.tagName !="DIV"){
        event.target.style.background="red";
    }
})
numeros.addEventListener("click", (event)=>{
    if(event.target.tagName !="DIV"){
    event.target.style.background="green";
    }
})

