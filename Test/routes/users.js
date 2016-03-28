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
  console.log("am i hereeeeeee?");
  res.render('user');
  res.end("yes");
});

//Get movie list
router.get('/get_user_list', function(req, res, next) {

  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});

//Get movie list
router.get('/get_movie_list', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});

//a
router.get('/get_movie', function(req, res, next) {

  db.moviedb.movie.where("name=$1", [req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});

//b
router.get('/get_movie_list', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//c
router.get('/get_actors_from_movie', function(req, res, next) {
  console.log("actor and role");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//d
router.get('/actor_appear_most', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//e
router.get('/two_most_actors', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//f
router.get('/ten_highest_rating_movies', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//g
router.get('/hiest_rating_movie_and_topic', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//h
router.get('/user_rating_number', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//i
router.get('/movie_not_rated_2016', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//j
router.get('/director_movie_lower', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//k
router.get('/category_highest_movie', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//l
router.get('/category_most_popular', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//m
router.get('/user_overall_rating', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//n
router.get('/frequent_user', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//o
router.get('/John_Smith', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.username], function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
//p
router.get('/diverse_user', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.username], function(err, result) {
    console.log(result);
    res.send(result);
  });
  res.end("yes");
});
module.exports = router;
