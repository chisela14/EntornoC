// Importamos el módulo http
const http = require('http');

// Creamos el servidor con el método createServer, este recibe
// una función con dos parámetros que serán la petición y la respuesta
http.createServer( (req, res) => {
    // Añadimos el código de estado
    res.writeHead(200); //100, 200 (correcto), 300, 400
    // Añadimos texto al body
    res.write('Hola Mundo'); //json
    // Devuelve la respuesta
    res.end();
}).listen( 8080 ); //puerto en el que está escuchando