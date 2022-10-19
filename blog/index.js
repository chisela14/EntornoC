// Creación de usuarios con validación de diferentes campos.
// Lista de posts con título y autor.
// Post con título, contenido y autor. Además se mostrarán los comentarios y nos permitirá añadir 
//     nuevos comentarios, pudiendo seleccionar el autor como queramos.
// EXTRA: página para añadir nuevos post, permitirá seleccionar el autor mediante un campo select.

let peticion = new XMLHttpRequest();
let lista = document.getElementById("lista");

//mostrar todos los posts en la lista vacía
peticion.open('GET', 'http://localhost:3000/posts');
peticion.send();
peticion.addEventListener('load', function(){
    if (peticion.status===200) {
        let posts = JSON.parse(peticion.responseText);
        //recorro todos los post para mostrar la info de cada uno
        for (let post of posts){
            //recupero la información del usuario 
            let username;
            let reqUser = new XMLHttpRequest();
            reqUser.open('GET', `http://localhost:3000/users?=${post.authorId}`);
            reqUser.send();
            reqUser.addEventListener('load', function(){
                if (peticion.status===200) {
                    let user = JSON.parse(reqUser.responseText);
                    user = user[0];
                    username = user.username;
                }else {
                    muestraError();
                }
            })
            //creo elemento li para la información del post
            let li = document.createElement("li");
            //añado una etiqueta a para que sea un enlace a otra página
            let a = document.createElement("a");
            a.setAttribute("href", `post.html?id=${post.id}`);
            let textoPost = document.createTextNode(`Título: ${post.title} Autor: ${username}`);
            a.appendChild(textoPost);
            li.appendChild(a);
            //añado el post a la lista
            lista.appendChild(li);
        }
    }else {
        muestraError();
    }
})

peticion.addEventListener('error', muestraError);
peticion.addEventListener('abort', muestraError);
peticion.addEventListener('timeout', muestraError);

function muestraError() {
    if (this.status) {
        console.log("Error "+this.status+" ("+this.statusText+") en la petición");
    } else {
        console.log("Ocurrió un error o se abortó la conexión");
    }
}


