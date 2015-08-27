"use strict";
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// [START hello_world]
/* Say hello! */
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
// [END hello_world]

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

// [START server]
/* Start the server */
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
  console.log('App listening at http://%s:%s', server.address().address, server.address().port);
  console.log("Press Ctrl+C to quit.");
});
// [END server]