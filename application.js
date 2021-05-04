//check this video for details https://www.youtube.com/watch?v=JiBtwxCm2bo&list=PL9ooVrP1hQOHDHAMA5egjL5MrbnNIuJqZ&index=4

let express = require('express');
let http = require('http');
let fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

/**parse application/x-www-form-urlencoded*/
app.use(bodyParser.urlencoded({extended: false}))

/**parse appliction/json */
app.use(bodyParser.json())
//let data = '';
let details = {};
fs.readFile('./demo-data.json', function(err, data) {
    let details = JSON.parse(data.toString());
});

app.get('/people', function(req, res){
    /**req -> Request has a information about what sent from client
     * side to server side
     * res -> What information we want to send as a response from server to 
     * client side.
     */
    fs.readFile('./demo-data.json', function(err, data) {
        let details = JSON.parse(data.toString());
        res.json(details);
        res.end()
    });
});

app.post('/people', function(req, res){
    let name = req.body
    details.push({name})
    res.json(details);
    res.end()
});

app.listen(3000, function(){
    console.log('Server listening at port: 3000');
});