var express = require('express');
var path = require('path');
var app = express();

const kotmaster = require('./kotmaster/controller/kotcontroller');

app.use('/kot',function(req,res,next)
{
    // var io_instance = req.io_config.io_instance;
    //  req.new_config = io_instance;
    next();
},kotmaster,
(req,res,next)=>{}
)

module.exports = app;
