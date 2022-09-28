// 1. Un campo que nos permite seleccionar la fecha y hora y la muestra a continuación. 
// La salida deberá tener el siguiente formato:
    // Hoy es martes, 28 de Febrero de 2018 y son las 14:32 horas.
    //https://gomakethings.com/how-to-get-and-set-a-date-object-from-an-input-with-vanilla-javascript/

const weekday = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let dateField= document.querySelector("#date");
dateField.addEventListener('input', mostrarFecha);
function mostrarFecha(){
    let date = new Date (dateField.value);
    console.log(`Has seleccionado el ${weekday[date.getDay()]} ${date.getDate()} de ${month[date.getMonth()]} de ${date.getFullYear()} a las ${date.getHours()}:${date.getMinutes()} horas.`);
}

// 2. A continuación dos campos para introducir un mes y un año e imprima su calendario. 
// No hace falta esmerarse en la presentación del calendario, el calendario simplificado puede ser del tipo:
// OCTUBRE – 2014
// 1 (miercoles), 2 (jueves), ….. , 31 (viernes).



// 3. Un campo que nos permita introducir una fecha y otro que nos permita introducir los días de retraso en el pago, 
// una ves introducidos nos devolverá la fecha del pago.

// 4. Un cronómetro con el siguiente formato:
// Hoy es 30-9-2019 y son las 21:4:23 horas.

// 5. Una alarma que mostrará la hora actual y nos permite indicar la hora a la que sonará, 
// cuando llegue a la hora, pregunta si se quiere posponer o detener, 
// si se pospone "sonará" a los 2 minutos. EXTRA: haz que suene un sonido además de mostrar el mensaje.
