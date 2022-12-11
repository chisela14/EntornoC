// Lista de deseos. A partir del código html de más abajo, realiza una aplicación que permita añadir elementos a la lista de deseos. 
// Cuando se añada, además tendrá un botón al lado que pondrá borrar y si lo pulsas eliminará el elemento de la lista. 
// Además cuando se añada a la lista cambiará el color a verde, para lo que tendremos que crear una clase y añadírsela, 
// no olvides quitársela cuando se elimina el elemento. Por último, no se puede añadir un mismo producto dos veces a la lista de deseos.


// recojo la lista de productos y la de deseos
const products = document.querySelector('ul');
const wishlist = document.getElementById('wishlist');

//añado un evento a la lista (delegación de eventos)
products.addEventListener('click', (e) => {
    //cuando el evento lo dispare un botón se llamará a la función correspondiente
    if(e.target.tagName == 'BUTTON'){
        checkWishlist(e.target.parentElement);
    } 
})

//función que comprueba si un elemento está en la wishlist por el id del botón y si no está lo añade
const checkWishlist = (element) => {
    let buttonId = element.lastElementChild.id;
    let wishlistButton = wishlist.querySelector(`button[id=${buttonId}`);
    if(wishlistButton == undefined){
        addToWhislist(element);
    }
}

//función que borra un elemento de la lista de productos y lo añade a la wishlist (cambiando las clases)
const addToWhislist = (element) => {
    //retiro el elemento de la lista de productos
    products.removeChild(element);
    //cambio la clase del elemento
    element.classList.toggle("on-wishlist");
    //modifico el botón
    element.lastElementChild.classList.remove("add-to-wishlist");
    element.lastElementChild.textContent = "Remove";
    //lo añado
    wishlist.appendChild(element);
}

//añado un evento a la wishlist para quitar productos
wishlist.addEventListener('click', (e) => {
    //se eliminará cuando se pulse el botón, eliminando antes la clase
    if(e.target.tagName == 'BUTTON'){
        e.target.parentElement.classList.remove('on-wishlist');
        wishlist.removeChild(e.target.parentElement);
    }
})

