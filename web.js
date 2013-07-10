var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(96);
buffer = fs.readFileSync("~/bitstarter/index.html");
var bufStr = new String;
bufStr = buffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send(bufStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
