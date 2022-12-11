// A partir de un fichero html con un párrafo de texto, disponemos de dos botones - y + para disminuir y aumentar el tamaño de la fuente. 
// Además, dispondremos de un selector que nos ofrezca diferentes fuentes, al menos 4, y si lo cambiamos cambiará la fuente del texto. 
// Por último habrá un botón que cambiará el color del texto de forma aleatoria.

//recuperar el texto
const text = document.querySelector("p");

//cambio de tamaño
const size = document.querySelector(".size");
size.addEventListener('click', (e) => {
    if(e.target.tagName =='BUTTON'){
        if(e.target.id == 'increase'){
            text.style.fontSize = "larger"; //con esto se cambia una vez, era la idea?
        }else if(e.target.id == 'decrease'){
            text.style.fontSize= "smaller";
        }
    }
})

//cambio de fuente
//no me queda nada claro como manejar eventos con un select
const select = document.querySelector(".family")
select.addEventListener("change", function() { //diferencia entre ()=> y function() ?
    let fontFamily = this.value; //es obligatorio establecer un valor? por qué no funciona .textContent?
    text.style.fontFamily = fontFamily;
})

//cambiar color del texto
//array con diferentes colores
const colors = ["#0000FF", "#FF0000", "#FFFF00", "#FF6600", "#00FF00", "#6600FF", "#000000"]
//funcion que devuelve un elemento aleatorio del array
const randomColor = () => {
    let index = Math.random() * colors.length;
    return colors[Math.trunc(index)];
}

//recupero el botón y le añado el evento
const colorButton = document.querySelector(".color button");
colorButton.addEventListener('click', ()=> {
    text.style.color = randomColor();
})