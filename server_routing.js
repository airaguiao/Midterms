var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log("There is Get request for the homepage");
    res.send('Here is the GET Method!');
})

app.get('/', function(req, res) {
    console.log("A POST request for the homep[age is accessed");
    res.send('Here is the POST Method');
})

app.get('/list_user', function(req, res) {
    console.log("Got a Get request for /list_user");
    res.send('This is Page Listing');
})

app.get('/list_user', function(req, res) {
    console.log("Got a Get request for /list_user");
    res.send('This is Page Listing');
})


app.get('/name', function(req, res) {
    console.log("Got a GET request for /name");
    res.send('This is Princess Aira Y. Guiao');
})

var server = app.listen(4000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
