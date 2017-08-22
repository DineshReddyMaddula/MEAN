var app = require('express')(),
    parse = require('body-parser'),
    mongoose = require('mongoose');

app.listen(8080,function () {
    console.log("Server Started");
});