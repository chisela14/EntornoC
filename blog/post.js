let peticion = new XMLHttpRequest();
let title = document.getElementById("title");
let listaCom = document.getElementById("listaCom");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

//recupero el post con el id enviado
peticion.open('GET', `http://localhost:3000/posts?id=${id}`);
peticion.send();
peticion.addEventListener('load', function(){
    if (peticion.status===200) {
        let post = JSON.parse(peticion.responseText);
        post = post[0];
        title.innerText = `${post.title} - por ${post.author}`;
        // //recuperar comentarios cuyo postId sea el mismo enviado por la url
        let reqComments = new XMLHttpRequest();
        reqComments.open('GET', `http://localhost:3000/comments?postId=${id}`);
        reqComments.send();
        reqComments.addEventListener('load', function(){
            if (reqComments.status===200) {
                let comments = JSON.parse(reqComments.responseText);
                for (let comment of comments){
                    let li = document.createElement("li");
                    let textoCom = document.createTextNode(comment.body);
                    li.appendChild(textoCom);
                    listaCom.appendChild(li);
                }
            }else {
                muestraError();
            }
        })
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