// Número de enlaces de la página
let enlaces = document.querySelectorAll('a');
console.log(enlaces.length);
// Dirección a la que enlaza el penúltimo enlace
console.log(enlaces[enlaces.length-2].getAttribute("href"));
// Numero de enlaces que enlazan a http://prueba
console.log(document.querySelectorAll('[href="http://prueba"]').length);
// Número de enlaces del tercer párrafo
console.log(document.querySelectorAll('p:nth-of-type(3) a').length);
