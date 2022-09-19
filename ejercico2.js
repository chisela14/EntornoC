
//contar número de filas -1 para el número de empleados
function conseguirNumEmp(){
    let num = document.getElementsByTagName("tr").length -1
    document.getElementById("numEmp").innerHTML = `Número total de empleados: ${num}`;
    return num;
}

//array de dni para comprobar los empleados
function conseguirDnis(){
    let tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    let dnis = [];
    //conseguir de cada fila las columnas
    for(let i of filas){
        let columnas = i.getElementsByTagName("td");
        dnis.push(columnas[1]);
    }
    //eliminamos el primer elemento (es el título de la columna)
    dnis.shift();
    return dnis;
}

function insertar(){
    let dniTexto = prompt("Introduce el DNI.")
    //comprobar que el dni no está en la tabla
    let dnis = conseguirDnis();
    if (dnis.indexOf(dniTexto) != -1)
        alert("El dni introducido ya está registrado");
    else
        crearFila(dniTexto); 
}
function crearFila(dni){
    let tabla = document.getElementById("tabla");
    let nuevaFila = tabla.insertRow();
    //crear 4 columnas
    let numColumnas = 4;
    for (let i = 0; i<numColumnas; i++){
        let nuevaColumna = nuevaFila.insertCell();
        let textoColumna;
        switch(i){
            case 0:
                textoColumna = document.createTextNode(conseguirNumEmp());  
                break;
            case 1:
                textoColumna = document.createTextNode(dni);
                break;
            case 2:
                textoColumna = document.createTextNode(prompt("Introduce el nombre."));
                break;
            case 3:
                textoColumna = document.createTextNode(prompt("Introduce los apellidos."));
                break;
        }
        nuevaColumna.append(textoColumna);
        nuevaFila.append(nuevaColumna);
    }
}

function eliminar(){
    let dniTexto = prompt("Introduce el DNI.")
    let filas;
    let encontrado = false;
    let borrarNodo;
    //comprobar que el dni está en la tabla
    let dnis = conseguirDnis();
    if (dnis.indexOf(dniTexto) == -1)
        alert("El dni introducido no está registrado");
    else
        //encontrar la fila con el mismo dni
        filas = document.getElementsByTagName("tr");
        while(encontrado==false){
            let contador = 0;
           for(let i of filas){
                let columnas = i.childNodes;
                for(let j of columnas){
                    if (j==dniTexto){
                        borrarNodo =  document.getElementsByTagName("tr"[contador]);
                        encontrado = true;
                    }
                }
                contador = contador++;
            } 
        }
        document.removeChild(borrarNodo);
}
function modificar(){

}


