let nom = ("hello world");
console.log(nom);


// question numero 2 creation de server
let http = require('http'); 
http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('hello node!!!');
    res.end();
}).listen(3000);
console.log('server running at http://localhost:3000/');


// Question num 3

let fs = require('fs');
const { clearScreenDown } = require('readline');
fs.writeFile('hello.txt', 'hello from node', (err) => {
    if (err) throw err;
    console.log('file created and saved');
});

// question num 4

