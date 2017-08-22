var app = require('express')(),
    parse = require('body-parser'),
    mongoose = require('mongoose');
var auth = require('./config.json');
mongoose.connect("mongodb://"+auth.user+":"+auth.pass+"@ds163612.mlab.com:63612/application");
mongoose.connection.on('connected',function () {
    console.log("Successfully Connected To DataBase");
});
mongoose.connection.on('error',function () {
    console.log("Something went wrong");
});
app.get('/',function () {
    
})
app.listen(8080,function () {
    console.log("Server Started");
});