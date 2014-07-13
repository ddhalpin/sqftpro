/**
 * CRUD with REST
 * - POST to create
 * - GET to read
 * - PUT to update
 * - DELETE to delete records.
 */

//var mongojs = require('mongojs');
// var db = mongojs('mongodb://dbuser:314159@ds047427.mongolab.com:47427/iserveyou', ['products']);

/**
 * Intializes the consumer router to start listenting to message
 * queue for consumer route requests
 * 
 * @param {restify server} server Instance of the restify server
 */
exports.init = function(server) {

	// Redirect the routs for consumers to the relative function.
	server.get("/v1/consumers", getAllConsumers_);
	server.post("/v1/consumers", createConsumer_);
	server.put('/v1/consumers/:id', getConsumer_);
	server.del('/v1/consumers/:id', removeConsumer_);
}


var getAllConsumers_ = function (req, res, next) {
	console.log("I am here!!!");

	return next();
};


var createConsumer_ = function (req, res, next) {
    // var product = req.params;
    // db.products.save(product,
    //     function (err, data) {
    //         res.writeHead(200, {
    //             'Content-Type': 'application/json; charset=utf-8'
    //         });
    //         res.end(JSON.stringify(data));
    //     });
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
    // db.products.remove({
    //     id: req.params.id
    // }, function (err, data) {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json; charset=utf-8'
    //     });
    //     res.end(JSON.stringify(true));
    // });
    return next();
};


