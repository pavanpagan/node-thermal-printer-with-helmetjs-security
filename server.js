var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = require('./app');
var cors = require('cors');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
app.use(logger(app.get("env") === "production" ? "combined" : "dev"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use('/hms',function(req,res,next)
 {
    req.io_config = {
        io_instance: io
    },
    next();
}, api);

app.set("env", process.env.NODE_ENV || "development");
app.set("host", process.env.HOST || "0.0.0.0");
app.set("port", process.env.PORT || 5000);

server.listen(app.get("port"), function () {
    console.log('\n' + '**********************************');
    console.log('REST API listening on port ' + app.get("port"));
    console.log('**********************************' + '\n');
});

module.exports = app;

