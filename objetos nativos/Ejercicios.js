// Actividad 1:  Crea un ejemplo de utilización del objeto window, tratando de mover y 
// redimensionar la ventana de diferentes maneras. Prueba en 2 navegadores diferentes. 
window.moveBy(20,30);
window.resizeTo(250,250);
window.resizeBy(0,50);
window.moveTo(0,0);

// Actividad 2: Realiza algún ejemplo sencillo de acceso y modificación de los diferentes atributos 
// del objeto document. Crea un documento html que contenga algún formulario, imágenes, anclas y enlaces y 
// comprueba el contenido de los arrays que contienen información sobre dichos elementos en el objeto document. 
document.title="Título cambiado";
document.URL="http://nueva_pagina"; 
document.getElementById("lastModified").innerHTML = document.lastModified;

// Actividad 3: Realiza un ejemplo donde obtengas toda la información posible del objeto location de forma ordenada. 
// Utiliza los métodos del objeto location para modificar la url, comprobando la diferencia entre assign y replace, 
// haz uso también del método reload.
document.querySelector("#hash").innerHTML+=location.hash;
document.querySelector("#host").innerHTML+=location.host;
document.querySelector("#hostname").innerHTML+=location.hostname;
document.querySelector("#href").innerHTML+=location.href;
document.querySelector("#pathname").innerHTML+=location.pathname;
document.querySelector("#port").innerHTML+=location.port;
document.querySelector("#protocol").innerHTML+=location.protocol;
document.querySelector("#search").innerHTML+=location.search;

// Actividad 4: A partir de la página proporcionada en las transparencias 
// https://developer.mozilla.org/es/docs/Web/API/Navigator indica y prueba algunos métodos útiles del objeto navigator.
registerProtocolHandler();
getBattery();
canShare();
getUserMedia();

// Actividad 5: Revisa la documentación del objeto screen https://developer.mozilla.org/es/docs/Web/API/Screen 
// y busca al menos 3 ejemplos útiles que puedas realizar con este objeto.

// Actividad 6: Crea un ejemplo que nos permita navegar por el historial con el objeto history, 
// para ello deberás realizar varias páginas y navegar entre ellas haciendo uso de este objeto.
