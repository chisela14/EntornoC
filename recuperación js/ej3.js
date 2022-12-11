// A partir del código html que se indica más abajo, crea un script javascript para obtener el valor de los atributos href, hreflang, rel, 
// target y type del enlace. Utiliza un tipo de selector diferente para cada uno de los atributos, modificando el código html si es necesario.

const href = document.querySelector("#w3r").href;
const hreflang = document.querySelector("p a").hreflang;
const rel = document.querySelector("p > a").rel;
const target = document.querySelector("a:only-of-type").target;
const type = document.querySelector("p :first-child").type;

//mostrar valores
const button = document.querySelector("button");
button.addEventListener('click', ()=>{
    document.write(`href: ${href}<br> hreflang: ${hreflang}<br> rel: ${rel}<br> target:${target}<br> type:${type}`);
})