var express = require('express');
var app = express();
app.use(express.static('./'));

// server
var server = app.listen(1812, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening on http://%s:%s', host, port);
});