var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login',{nullinput:''});
});

/*Get sign up page*/
router.get('/signup', function(req, res, next) {
  res.render('signup');
  
});

/* Process login requests*/
router.get('/login', function(req, res, next) {
   var email = req.body.email;
  var password = req.body.password;
    console.log(email + "***************" + password);
   

   if (email != "" && password != "") {
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
      // Handle connection errors

      if (err) {
        done();
        console.log(err);
        return res.status(500).json({
          success: false,
          data: err
        });
      }

      // SQL Query > Select Data
      client.query("SET SEARCH_PATH='movedb';");
      var q = "SELECT PASSWORD FROM USERS WHERE EMAIL='" + email + "';"



      client.query(q, function(err, result) {
        if (err) {
          return console.error('error running query', err);
        }

        /**
        if the password is correct, direct the user to user page:
        */
        var a = result.rows[0].password;
        var S = require('string');
        var b = S(a).strip(' ').s;
        if ([deepEqual(b, password)]) {
          console.log("*********Login successfully*****");
          // redirect the page to user's info page
          res.render('user');
          res.end("yes");
        } else {
          //print the message that login failed.

        }

        console.log("the password is" + result.rows[0].password);
      });
    });
  }
  else {
    //if no input for Username and pw, throw a new login page
    res.render('login',{nullinput:'Please enter the email and password.'});
  }
});

/*G*/

module.exports = router;
