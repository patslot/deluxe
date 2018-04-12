'use strict';
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");


var app = express() ;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render('homepage'); 
});

app.set('port', process.env.PORT || 8885);

var runningServer = app.listen(app.get('port'), function() {
  console.log('listening on port ' + runningServer.address().port);
});
