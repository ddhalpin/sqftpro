/**
 * CRUD with REST
 * - POST to create
 * - GET to read
 * - PUT to update
 * - DELETE to delete records.
 *
 *  NOTE: Restify ships with support for semver versioning in an 'Accept-Version' header.
 */


var mongojs = require('mongojs');
var databaseUrl = "sqftpro"; // "username:password@example.com/mydb"
var db = mongojs.connect(databaseUrl, ["consumers"]);
var ObjectId = mongojs.ObjectId;

//var db = mongojs('mongodb://dbuser:314159@ds047427.mongolab.com:47427/iserveyou', ['products']);

/**
 * Intializes the consumer router to start listenting to message
 * queue for consumer route requests
 * 
 * @param {restify server} server Instance of the restify server
 */
exports.init = function(server) {

	// Redirect the routes for consumers to the relative function.
	server.get( {path: "/consumers", version: "1.0.0"}, getAllConsumers_);
	server.post( {path: "/consumers", version: "1.0.0"}, createConsumer_);
	server.put( {path: "/consumers/:id",  version: "1.0.0"}, getConsumer_);
	server.del( {path: "/consumers/:id",  version: "1.0.0"}, removeConsumer_);
}


var getAllConsumers_ = function (req, res, next) {
	
	// Resitify currently has a bug which doesn't allow you to set default headers
	// This headers comply with CORS and allow us to server our response to any origin
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	db.consumers.find(function (err, consumers) {
		if( err || !consumers) {
			console.log("No consumers found");
		}
   		else {

  // 			consumers.forEach( function(consumer) { console.log(consumer); } );
			res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
			res.end(JSON.stringify(consumers));
		}
   });
    
	return next();
};


var createConsumer_ = function (req, res, next) {
    var consumer = req.params;
    db.products.save(consumer,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
};


var getConsumer_ = function (req, res, next) {
    // // get the existing product
    // db.products.findOne({
    //     id: req.params.id
    // }, function (err, data) {
    //     // merge req.params/product with the server/product

    //     var updProd = {}; // updated products 
    //     // logic similar to jQuery.extend(); to merge 2 objects.
    //     for (var i in data) {
    //         updProd[i] = data[n];
    //     }
    //     for (var n in req.params) {
    //         updProd[n] = req.params[n];
    //     }
    //     db.products.update({
    //         id: req.params.id
    //     }, updProd, {
    //         multi: false
    //     }, function (err, data) {
    //         res.writeHead(200, {
    //             'Content-Type': 'application/json; charset=utf-8'
    //         });
    //         res.end(JSON.stringify(data));
    //     });
    // });
    return next();
};


var removeConsumer_ = function (req, res, next) {
	console.log(req.params.id);

    db.consumers.remove({
        _id: ObjectId(req.params.id)
    }, function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(true));
    });
    return next();
};


