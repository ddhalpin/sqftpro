
var restify = require('restify');
var consumers = require('./consumers');

// Server
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Initialize the consumer router services
consumers.init(server);

// Startup the server and start dispatching requests
server.listen(3000, function () {
    console.log("Server started @ 3000");
});
