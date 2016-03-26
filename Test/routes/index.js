var express = require('express');
var router = express.Router();
var pg = require('pg');
var deepEqual = require('deep-equal');
var massive = require("massive");
var connectionString = 'postgres://rliu040:8439L177Lr@@web0.site.uottawa.ca:15432/rliu040';
var db = massive.connectSync({
  connectionString: connectionString
});
router.get('/', function(req, res, next) {
  res.render('login', {
    nullinput: ''
  });
});

/*Get sign up page*/
router.get('/signup', function(req, res, next) {
  res.render('signup');

});

/* Process login requests*/
router.post('/login', function(req, result, next) {
  var email = req.body.email;
  var password = req.body.password;

  //using massive to find password:
  db.movedb.users.where("email=$1", [email], function(err, res) {

    if (err) {
      done();
      console.log(err);
      return result.status(500).json({
        success: false,
        data: err
      });
    }
    var check = res[0].password;
    check = check.replace(/\s+/g, '');
    if (check == password) {
      // The password is correct
      console.log("the password is correct");
      result.render('user');
      result.end("yes");
    } else {
      //The password is in correct
      console.log("the password is incorrect");
      result.render('login', {
        nullinput: ''
      });
      result.end("yes");
    }
  });

});



/* Process Signup requests*/
router.post('/signup/submit', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
// Get a Postgres client from the connection pool
  db.movedb.users.insert({
    password: password,
    last_name: last_name,
    first_name: first_name,
    email: email
  }, function(err, result) {
    console.log(result);
req.session.user = result;
res.redirect('/user');
  });
  res.end("yes");
});
/*   Sign up helper function*/
/*check if the email exists*/
router.post('/signup/check_email_exists', function(req, result, next) {
  var email = req.body.email;
  //Go in to the database
  var decision = true;


  db.movedb.users.where("email=$1", [email], function(err, res) {

    if (err) {
      done();
      console.log(err);
      return result.status(500).json({
        success: false,
        data: err
      });
    }
    var email_is_null = (res[0] == null);
    if (email_is_null) {
      // The password is correct
      console.log("This email address is ok");
      result.send('OK');
      return;
    } else {
      //The password is in correct
      console.log("This email address is not ok");
      result.send("not OK");
    }
  });
});


/*G*/

module.exports = router;
