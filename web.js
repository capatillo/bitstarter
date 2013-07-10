var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var filename = "index.html";
var text = fs.readFileSync(filename);
var html = buf.toString();

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
