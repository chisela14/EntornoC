// Número de enlaces de la página
console.log(document.querySelectorAll('a').length);
// Dirección a la que enlaza el penúltimo enlace
console.log(document.querySelector('[href]:nth-last-child(2)'));
// Numero de enlaces que enlazan a http://prueba
console.log(document.querySelectorAll('[href^="http://prueba"]'));
// Número de enlaces del tercer párrafo
console.log(document.querySelectorAll('p:nth-of-type(3) a').length);
