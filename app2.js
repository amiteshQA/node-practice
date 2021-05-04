let http  = require('http');
let events = require('events')

let eventEmitter = new events.EventEmitter()

let server = http.createServer(function(req, res) {
    eventEmitter.emit('requests going from emitter', 'TestData') //event trigger
    res.end('Server showing up')
});

eventEmitter.on('requests going from emitter', function(data) {
    console.log('A request has been done on the server!', data)
}); //event listner

/**Creating a server */
server.listen(4000, 'localhost', function() { //callback fn
    console.log('Server up and running on: 4000')
});