const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end("HTTP Server is running\n");
}).listen(80);