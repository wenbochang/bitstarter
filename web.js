var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var read = fs.readFileSync('index.html');  
  var buff = new Buffer(read, 'utf-8');
  var msg = buff.toString();j 

  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
