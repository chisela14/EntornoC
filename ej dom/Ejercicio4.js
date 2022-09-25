// Selecciona todos los elementos de tipo h2 y pon el texto de color rojo.
let h2 = document.querySelectorAll("h2");
for(let elem of h2){
    elem.style.color="red";
}

// Modifica el precio del vuelo para que ahora sea $199.99
let precios = document.querySelectorAll(".details");
for(let elem of precios){
    elem.textContent="$199.99";
}

// Modifica todos los títulos de las vacaciones (h2), su nuevo valor será "Sanlúcar de Barrameda".
for(let elem of h2){
    elem.textContent="Sanlúcar de Barrameda";
}

// Selecciona la lista de vacaciones cuyo id es #vacations.
console.log(document.querySelector("#vacations"));

// Selecciona aquellos ítems que tenga la clase .america
console.log(document.querySelectorAll(".america"));