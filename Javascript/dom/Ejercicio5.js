// a - Selecciona todos los módulos de primero
let mod1 = document.querySelector("p + ul");
mod1.style.color="chartreuse";

// b - Selecciona el módulo Sistemas Informáticos
let sistemas = document.querySelector("[href='SImod.html']");
sistemas.style.textDecoration="line-through";

// c - Selecciona el módulo que va detrás de Sistemas Informáticos
let detrasSistemas = document.querySelector("ul:first-of-type li:nth-of-type(4)");
detrasSistemas.style.textTransform="uppercase";

// d - Selecciona los módulos que van detrás de Sistemas Informáticos
let listaDetrasSistemas = document.querySelectorAll("ul:first-of-type li:nth-of-type(1n + 4)");
for(let elem of listaDetrasSistemas){
    elem.style.color="darkgreen";
}

// e - Selecciona los módulos que tengan el atributo href
let href = document.querySelectorAll("[href]");
for(let elem of href){
    elem.style.color="brown";
}

// f - Selecciona los módulos que no tengan el atributo href
let notHref = document.querySelectorAll(":not([href])");
for(let elem of notHref){
    elem.style.color="purple";
}

// g - Selecciona aquellos módulos que contengan la cadena 'mod'
let cadenaMod = document.querySelectorAll("[href*='mod']");
for(let elem of cadenaMod){
    elem.innerHTML+=" mod ✓";
}

// h - Selecciona aquellos módulos que empiecen por la cadena 'mod'
let empiezaMod = document.querySelectorAll("[href^='mod']");
for(let elem of empiezaMod){
    elem.style.fontWeight="bold";
}

// i - Selecciona aquellos módulos que terminen con la cadena '.html'
let acabaHtml = document.querySelectorAll("[href$='.html']");
for(let elem of acabaHtml){
    elem.innerHTML+=".html";
}

// j - Selecciona todas las horas de los módulos de segundo
let horas = document.querySelectorAll("li ul li:last-child");
for(let elem of horas){
    elem.style.fontWeight="bolder";
}
// k - Selecciona los ítems vacíos y añade el contenido 'Nodo vacío'
let vacios = document.querySelectorAll(":empty");
for(let elem of vacios){
    elem.innerHTML+=" Nodo vacío";
}

// h - Selecciona los módulos DWESE, DAW y EIE
    //busco entre los elementos li los que tengan ese nombre y los guardo en un array
let modulos = [];
for (let elem of document.querySelectorAll('li')) {
  if (elem.textContent.includes("DWESE")||elem.textContent.includes("DAW")||elem.textContent.includes("EIE")) {
    modulos.push(elem);
  }
}
    //cambio el estilo de los elementos del array
for(let elem of modulos){
    elem.style.fontStyle="italic";
}