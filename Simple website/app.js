var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connectionString ='postgres://rliu040:8439L177Lr@@web0.site.uottawa.ca:15432/rliu040';
var bodyParser=require("body-parser");
var deepEqual = require('deep-equal');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', '../','posgreHappyEveryDay------','Simple website', 'index.html'));
});


//used for login check the database to see if the email exists.
app.post('/login',function(req,res){
  var email=req.body.email;
  var password=req.body.password;

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err});
      }

      // SQL Query > Select Data
      client.query("SET SEARCH_PATH='movedb';");
      var q="SELECT PASSWORD FROM USERS WHERE EMAIL='"+email+"';"



      client.query(q, function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }

        /**
        if the password is correct, direct the user to user page:
        */
        var a=result.rows[0].password;


        var S = require('string');
        var b=S(a).strip(' ').s;
        if([deepEqual(b,password)]){
          console.log("*********Login successfully*****");
        }



        console.log("the password is"+result.rows[0].password);
      });


      //test only
      console.log("From Client pOST request: email is "+email+" and password is "+password);

      res.end("yes");
  });
});


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
