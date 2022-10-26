// Post con título, contenido y autor. Además se mostrarán los comentarios y nos permitirá añadir 
//     nuevos comentarios, pudiendo seleccionar el autor como queramos.
// EXTRA: página para añadir nuevos post, permitirá seleccionar el autor mediante un campo select.

let peticion = new XMLHttpRequest();
let title = document.getElementById("title");
let bodyPost = document.getElementById("body");
let listaCom = document.getElementById("listaCom");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

//funcion para comparar fechas
function compareDate(a, b){
    result = 0;
    d1 = new Date(a.parse());
    d2 = new Date(b.parse());
    if(d1 < d2){
        result = -1;
    }
    if(d2>d1){
        result = 1;
    }
    return result;
}

//recupero el post con el id enviado
peticion.open('GET', `http://localhost:3000/posts?id=${id}`);
peticion.send();
peticion.addEventListener('load', function(){
    if (peticion.status===200) {
        let post = JSON.parse(peticion.responseText);
        post = post[0];
        bodyPost.innerText = post.body;
        //recupero autor del post
        let author;
        let reqAuthor = new XMLHttpRequest();
        reqAuthor.open('GET', `http://localhost:3000/users?id=${post.authorId}`);
        reqAuthor.send();
        reqAuthor.addEventListener('load', function(){
            if (peticion.status===200) {
                let userA = JSON.parse(reqAuthor.responseText);
                userA = userA[0];
                author = userA.username;
                title.innerText = `${post.title} - por ${author}`;
            }else {
                muestraError();
            }
        })
        // //recuperar comentarios cuyo postId sea el mismo enviado por la url
        let reqComments = new XMLHttpRequest();
        reqComments.open('GET', `http://localhost:3000/comments?postId=${id}`);
        reqComments.send();
        reqComments.addEventListener('load', function(){
            if (reqComments.status===200) {
                let comments = JSON.parse(reqComments.responseText);
                //https://www.c-sharpcorner.com/UploadFile/fc34aa/sort-json-object-array-based-on-a-key-attribute-in-javascrip/ 
                comments.sort(compareDate("timeStamp"));
                for (let comment of comments){
                    //recupero el usuario que comentó 
                    let username;
                    let reqUser = new XMLHttpRequest();
                    reqUser.open('GET', `http://localhost:3000/users?id=${comment.authorId}`);
                    reqUser.send();
                    reqUser.addEventListener('load', function(){
                        if (peticion.status===200) {
                            let userC = JSON.parse(reqUser.responseText);
                            userC = userC[0];
                            username = userC.username;

                            //muestro el comentario en la lista
                            let li = document.createElement("li");
                            let small = document.createElement("small");
                            small.appendChild(document.createTextNode(`${comment.timeStamp}`));
                            let textoCom = document.createTextNode(`${username}: ${comment.body}     `);
                            li.appendChild(textoCom);
                            li.appendChild(small);
                            listaCom.appendChild(li);
                        }else {
                            muestraError();
                        }
                    })
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