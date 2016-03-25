var express = require('express');
var router = express.Router();
var session = require('client-sessions');
var pg = require('pg');
var deepEqual = require('deep-equal');
var connectionString = 'postgres://rliu040:8439L177Lr@@web0.site.uottawa.ca:15432/rliu040';

/* GET home page. */
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
router.post('/login', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email + "***************" + password);


  if (email != "" && password != "") {
    // Get a Postgres client from the connection pool
    console.log("sajoisjdosidjfoajsdofjaosdifjoasidjoiasjdoisajdoooadsj");

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
        console.log(result.rows[0].password);
        var a = result.rows[0].password;
        var S = require('string');
        var b = S(a).strip(' ').s;
        if ([deepEqual(b, password)]) {
          console.log("*********Login successfully*****");
          //req.session.user = user;
          // redirect the page to user's info page
          res.render('user');
          res.end("yes");
        } else {
          //print the message that login failed.

        }

        console.log("the password is" + result.rows[0].password);
      });
    });
  } else {
    //if no input for Username and pw, throw a new login page
    res.render('login', {
      nullinput: 'Please enter the email and password.'
    });
  }
});



/* Process Signup requests*/
router.post('/signup_submit', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
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

      // SQL Query >insert user into db
      client.query("SET SEARCH_PATH='movedb';");
      var q = "INSERT INTO USERS(password,last_name,first_name,email) VALUES('" + password + "','" + last_name + "','" + first_name + "','" + email + "')";



      client.query(q, function(err, result) {
        if (err) {
          return console.error('error running query', err);
        }

          console.log("sign in successfully");
        res.end("yes");



      });
    });
  }

});
/*   Sign up helper function*/





/*check if the email exists*/
router.post('/check_emil_exists', function(req, res, next) {
var email=req.body.email;
//Go in to the database
var result=true;
console.log("am i here?");
pg.connect(connectionString, function(err, client, done) {
  // Handle connection errors
console.log("A   "+email);
  if (err) {
    console.log("error");
    done();
    console.log(err);
    return res.status(500).json({
      success: false,
      data: err
    });
  }

  // SQL Query >insert user into db
  client.query("SET SEARCH_PATH='movedb';");
var q = "SELECT * FROM USERS WHERE EMAIL='" + email + "';"



  client.query(q, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
console.log(result.rows[0]+"***********************************");
if(result.rows.length>0){
  result=false;
  console.log("B  "+email);
}


  });
});
//
if(result){
  res.send("0");
  console.log("C   "+email);
  return;
}
else{
  res.send("not OK");
  console.log("4 "+email);
  return;
}


});


/*G*/

module.exports = router;
