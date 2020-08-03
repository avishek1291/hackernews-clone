const path = require('path');
const express = require('express');
const app = express();

const htmlPath = path.join(__dirname, 'dist/hacker-news-clone');

app.use(express.static(htmlPath));

const server = app.listen(process.env.port || 3000, function () {
    const host = 'localhost';
    const port = server.address().port;
    console.log('listening on http://'+host+':'+port+'/');
});