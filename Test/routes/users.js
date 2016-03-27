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
  res.render('user');
  return;
});

//Get movie list
router.get('/get_user_list', function(req, res, next) {

  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});

//Get movie list
router.get('/get_movie_list', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});

//a
router.get('/get_movie', function(req, res, next) {

  db.moviedb.movie.where("name=$1",[req.body.name],function(err, result) {
    console.log(result);
    res.send(result);
  });
});

//b
router.get('/get_movie_list', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//c
router.get('/get_actors_from_movie', function(req, res, next) {
  console.log("actor and role");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//d
router.get('/actor_appear_most', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//e
router.get('/two_most_actors', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//f
router.get('/ten_highest_rating_movies', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//g
router.get('/hiest_rating_movie_and_topic', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//h
router.get('/user_rating_number', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//i
router.get('/movie_not_rated_2016', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//j
router.get('/director_movie_lower', function(req, res, next) {
  console.log("movie");
  db.get_user_list(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//k
router.get('/category_highest_movie', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.name],function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//l
router.get('/category_most_popular', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.name],function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//m
router.get('/user_overall_rating', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.name],function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//n
router.get('/frequent_user', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.name],function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//o
router.get('/John_Smith', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.username],function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//p
router.get('/diverse_user', function(req, res, next) {
  console.log("category name");
  db.type_highest_movie([req.body.username],function(err, result) {
    console.log(result);
    res.send(result);
  });
});
module.exports = router;
