var express = require('express');
var router = express.Router();
var pg = require('pg');
var deepEqual = require('deep-equal');
var massive = require("massive");
var connectionString = 'postgres://rliu040:8439L177Lr@@web0.site.uottawa.ca:15432/rliu040';
var db = massive.connectSync({
  connectionString: connectionString
});
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

//Get movie list
router.get('/get_user_list', function(req, res, next) {
  console.log("shihihi");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
