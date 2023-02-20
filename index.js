const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const PORT = 80

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("HTTPS Server is running\n");
}).listen(PORT, () => console.log(`The server is running on Port ${PORT}`));