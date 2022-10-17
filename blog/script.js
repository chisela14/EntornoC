let peticion = new XMLHttpRequest();
let lista = document.getElementById("lista");

//mostrar todos los posts en la lista vacía
peticion.open('GET', 'http://localhost:3000/posts');
peticion.send();
peticion.addEventListener('load', function(){
    let posts = JSON.parse(peticion.responseText);
    for (let post of posts){
        let li = document.createElement("li");
        let textoPost = document.createTextNode(`Título: ${post.title} Autor: ${post.author}`);
        li.appendChild(textoPost);
        lista.appendChild(li);
        let id = post.id;
        //crear un evento para los hijos de la lista, cuando se pulse sobre ellos se desplegará la información de comments
        lista.addEventListener('click',(event)=>{
            let h4 = document.createElement("h4");
            h4.appendChild(document.createTextNode('Comentarios'));
            event.target.appendChild(h4);
            let listaCom = document.createElement("ul");
            event.target.appendChild(listaCom);

            peticion.open('GET', `http://localhost:3000/comments?postId=${id}`);
            peticion.send();
            peticion.addEventListener('load', function(){
                let comments = JSON.parse(peticion.responseText);
                for (let comment of comments){
                    let li = document.createElement("li");
                    let textoCom = document.createTextNode(comment.body);
                    li.appendChild(textoCom);
                    listaCom.appendChild(li);
                }
            });
        });     
    }
});

//CREAR OTRA PÁGINA PARA MOSTRAR EL POST COMPLETO

