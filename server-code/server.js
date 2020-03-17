const express = require('express');
const app = express();
const getlocations = require('./userlocation');

app.use('/users', getlocations);

const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});