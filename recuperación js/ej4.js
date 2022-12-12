// Escribe un programa Javascript para resaltar las palabras en negrita del párrafo cuando pase el ratón por el enlace. 
// Para resaltarlas tendrás que asignarles una clase que las cambie de color, o cualquier cosa que se te ocurra y se la quitas cuando se quita el ratón del enlace.

//obtener todas las palabras en negrita
const bold = document.querySelectorAll("strong");

//funciones especificadas en el html para los eventos de pasar y quitar el ratón por el enlace
const highlight = () => {
    for(let word of bold){
        word.classList.add("highlighted");
    }
}

const return_normal = () => {
    for(let word of bold){
        word.classList.remove("highlighted");
    }
}

//sin usar las funciones se recoge el enlace y se le añaden los eventos mouseover y mouseout