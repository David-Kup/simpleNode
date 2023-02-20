const http = require('http');

const PORT = 80;

http.createServer((req, res) => {
    res.writeHead(200);
    res.end("HTTP Server is running\n");
}).listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));