var express = require('express');
var router = express.Router();
var pg = require('pg');
var session = require('express-session');
var deepEqual = require('deep-equal');
var massive = require("massive");
var connectionString = 'postgres://rliu040:8439L177Lr@@web0.site.uottawa.ca:15432/rliu040';
var db = massive.connectSync({
  connectionString: connectionString
});
/* GET users listing. */
var sess;
router.use(session({secret: 'ssshhhhh'}));
router.get('/', function(req, res, next) {
  sess=req.session;
  if(sess.email){
  res.render('movie');
  res.end("yes");}
  else{
    res.redirect('/');
    res.end("yes");
  }
});



module.exports = router;
