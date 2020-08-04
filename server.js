const path = require('path');
const express = require('express');
const app = express();

const htmlPath = path.join(__dirname, 'dist/hacker-news-clone/browser');

app.use(express.static(htmlPath));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/hacker-news-clone/browser/index.html'));
    });

const server = app.listen(process.env.PORT || 3000, function () {
    const host = 'localhost';
    const port = server.address().port;
    console.log('listening on http://'+host+':'+port+'/');
});