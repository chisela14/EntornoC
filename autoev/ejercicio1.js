
function inicializar(){
    let nombres = [];
    //repetir hasta tener 5 nombres
    while (nombres.length !=5){
        let nombre = prompt("Introduce un nombre.");
        nombre = nombre.toUpperCase();
        //comprobar que el nombre no esté vacío para poder mostrar la primera letra después
        if (nombre == '' || nombre == ' ')
            alert("El nombre no puede quedar vacío.");
        //introducir el nombre si no está ya en el array   
        else if (nombres.indexOf(nombre) == -1)
            nombres.push(nombre); 
        //mostrar alerta si el nombre ya está en el array    
        else
            alert("El nombre ya se encuentra en el array, por favor introduce otro.");
    }
    mostrarLetras(nombres);   
    }

//devolver primera letra en mayúscula de cada uno
//de los nombres introducidos en el array ordenadas por orden alfabético.
function mostrarLetras(array){
    array = array.sort();
    console.log(array);
    for (let i of array){
        console.log(i[0])
    }
}