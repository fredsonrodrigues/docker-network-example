const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(`
    {
        name: 'fredson',
        age: 25,
        job: 'Developer',
        server: ${process.env.SERVER}
    }`);
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
