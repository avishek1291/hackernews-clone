var path = require('path');
var express = require('express');
var app = express();

var htmlPath = path.join(__dirname, 'dist/hacker-news-clone');

app.use(express.static(htmlPath));

var server = app.listen(process.port || 3000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('listening on http://'+host+':'+port+'/');
});