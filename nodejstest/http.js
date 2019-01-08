const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello world from nodejs');
//         res.end();    
//     } else {
//         res.write('using some other domain');
//         res.end();
//     }
// });

// server.listen('3000');

// serve static file using http and filesystem
// http.createServer((req,res) => {
//     const readStream = fs.createReadStream('./static/index.html');
//     // header for response
//     res.writeHead(200, {'Content-type': 'text/html'});
//     readStream.pipe(res);    
// }).listen(3000);

// http.createServer((req,res) => {
//     const readStream = fs.createReadStream('./static/example.json');
//     // header for response
//     res.writeHead(200, {'Content-type': 'application/json'});
//     readStream.pipe(res);    
// }).listen(3000);

http.createServer((req,res) => {
    const readStream = fs.createReadStream('./static/example.png');
    // header for response
    res.writeHead(200, {'Content-type': 'image/png'});
    readStream.pipe(res);    
}).listen(3000);
