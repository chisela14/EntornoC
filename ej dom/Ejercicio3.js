// - Pon tu nombre al atributo value del campo first name
let firstName = document.querySelector('[name="firstname"]');
firstName.setAttribute("value", "Chisela");

// - Pon el valor a la pregunta Favorite Day of Week a Monday
let monday = document.querySelector('[value="Monday"]');
monday.setAttribute("selected", "");

// - Cambia la etiqueta de First name a 'Tu nombre'
let labelNombre = document.querySelector('label');
labelNombre.textContent="Tu nombre:";

// - Obtén el valor del atributo 'name' del campo Favorite Day of The Week
let favDay = document.querySelector('select');
console.log(favDay.getAttribute("name"));

// - Escoge la opción Female de la pregunta de género.
let female = document.querySelector('[value="female"]');
female.setAttribute("checked", "");

// - Encuentra la primera form del documento y pon el atributo name = personal_info
let form1 = document.querySelector('form');
form1.setAttribute("name", "personal_info");

// - Encuentra la primera form del documento y pon el atributo name = job_info *segundo form
let form2 = document.querySelector('form:nth-of-type(2)');
form2.setAttribute("name", "job_info");

// - Agrega un título h1 a cada uno de las formularios que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
let h1P = document.createElement("h1");
let entrevistaP = document.createTextNode("Entrevista personal");
h1P.appendChild(entrevistaP);
form1.insertAdjacentElement("afterbegin", h1P);

let h1T = document.createElement("h1");
let entrevistaT = document.createTextNode("Entrevista de trabajo");
h1T.appendChild(entrevistaT);
form2.insertAdjacentElement("afterbegin", h1T);

// - Agrega un título a la pregunta Male/Female 'Gender'
//creo titulo
let titulo = document.createElement("p");
let textoTitulo = document.createTextNode("Gender:");
titulo.appendChild(textoTitulo);
//recupero elemento male para poner el titulo encima
let male = document.querySelector('[value="male"]');
male.insertAdjacentElement("beforebegin", titulo);

// - Agrega una pregunta Email: con un input de tipo texto después de last name
//creo el elemento para email
let email = document.createElement("input");
let textoEmail = document.createTextNode("Email:");
email.appendChild(textoEmail);
email.setAttribute("type", "text");
//recupero last name y lo pongo despues

// - Agrega la clase form a ambos formularios
let formularios = document.querySelectorAll('form');
for (let elem of formularios) {
	elem.classList.add('form');
}