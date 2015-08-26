var express = require('express');
var app = express();
var port = 8000;

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

app.listen(port);
console.log("Server is listening on port:" + port);