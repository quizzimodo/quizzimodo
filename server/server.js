var express = require('express');
var db = require('../db_config/db_config.js');

var app = express();

require('./config/middleware.js')(app, express);

module.exports = app;
