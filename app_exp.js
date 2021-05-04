// let express = require('express');
// let http = require('http');
// let fs = require('fs');

// let app = express();
// let server = http.createServer(app);

// app.get('/', function(req, res) {
//     res.send('<h1>Get call listening here</h1>')
// });

// app.get('/tasks', function(req, res) {
//     fs.readFile('./demo-data.json', function(err, data) {
//         let details = JSON.parse(data.toString());
//         res.json(details);
//     });
// });

// server.listen(4040, function(){
//     console.log('Server listening at port: 4040');
// });

// console.log(__dirname) //cwd
// console.log(__filename) //

// setInterval(() =>{
//     console.log(__filename) //printing it every second
// }, 1000);

//common js, every file is a module
//Modules = encapsulated code (only share minimum)

const {john, peter} = require('./names')
const sayHi = require('./utils')

sayHi('Susan')
sayHi(john)
sayHi(peter)


