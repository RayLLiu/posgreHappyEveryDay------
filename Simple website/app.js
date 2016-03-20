var express = require('express');
var app = express();




var router = express.Router();
var path = require('path');
var pg = require('pg');
var connectionString ='postgres://rliu040:8439L177Lr@@web0.site.uottawa.ca:15432/rliu040';


app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', '../','posgreHappyEveryDay------','Simple website', 'index.html'));
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
