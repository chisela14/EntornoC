const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    // Establecemos el tipo de contenido
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Disposition", "Attachment; filename=prueba.html");
    res.writeHead(200);
    res.end(`<h2>This is a HTML response</h2>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});