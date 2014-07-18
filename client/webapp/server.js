var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/data'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

