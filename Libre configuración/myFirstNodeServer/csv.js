const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    // Establecemos el tipo de contenido
    res.setHeader("Content-Type", "text/csv");
    res.writeHead(200);
    res.end(`1,this is a csv response`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});