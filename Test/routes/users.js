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
  res.render('users');
  res.end("yes");
});

//Get user list
router.get('/get_user_list', function(req, res, next) {

  db.get_user_list(function(err, result) {
    res.send(result[0]);
  });

});

//Get movie list
router.get('/get_movie_list', function(req, res, next) {
  console.log("movie");
  db.get_movie_list(function(err, result) {
    res.send(result);
  });
});

//a
router.post('/get_movie', function(req, res, next) {

  console.log("get_moviejjjjjjjjj" + req.body.moviename);
  db.moviedb.movie.where("name=$1", [req.body.moviename], function(err, result) {
    console.log(result);
    res.send(result);
  });
});

//b
router.post('/get_actors_from_movie', function(req, res, next) {
  console.log(req.body.moviename + "n");
  //var query = "SET SEARCH_PATH='moviedb';  Select distinct A.First_name,A.Last_name,A.Date_Of_Birth,R.name From Actor A, Role R, Movie M, ActorPlays Ap Where (M.name ='" + req.body.moviename + "') AND (M.movie_id = Ap.movie_id) AND (Ap.actor_id = A.actor_id) AND (Ap.role_id = R.role_id);"
//  console.log(query);
  db.b_get_actors_from_movie([req.body.moviename], function(err, result) {
    // all matching products returned in array
    res.send(result);
  });
});
//c
router.post('/details_of_directors_and_studios', function(req, res, next) {
  db.c_details_of_directors_and_studios('Action',function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//d
router.get('/actor_appear_most', function(req, res, next) {
  console.log("movie");
  db.d_actor_appear_most(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//e
router.get('/two_most_actors', function(req, res, next) {
  console.log("movie");
  db.two_most_actors(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//f
router.get('/ten_highest_rating_movies', function(req, res, next) {
  console.log("movie");
  db.f_ten_highest_rating_movies(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//g
router.get('/highest_rating_movie_and_topic', function(req, res, next) {
  console.log("highest_rating_movie_and_topic");
  db.g_highest_rating_movie_and_topic(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//h
router.get('/user_rating_number', function(req, res, next) {
  console.log("movie");
  db.user_rating_number(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//i
router.get('/movie_not_rated_2016', function(req, res, next) {
  console.log("movie");
  db.movie_not_rated_2016(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//j
router.get('/director_movie_lower', function(req, res, next) {
  console.log("movie");
  db.director_movie_lower(function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//k
router.get('/category_highest_movie', function(req, res, next) {
  console.log("category name");
  db.category_highest_movie([req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//l
router.get('/category_most_popular', function(req, res, next) {
  console.log("category name");
  db.category_most_popular([req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//m
router.get('/user_overall_rating', function(req, res, next) {
  console.log("category name");
  db.user_overall_rating([req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//n
router.get('/frequent_user', function(req, res, next) {
  console.log("category name");
  db.frequent_user([req.body.name], function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//o
router.get('/John_Smith', function(req, res, next) {
  console.log("category name");
  db.John_Smith([req.body.username], function(err, result) {
    console.log(result);
    res.send(result);
  });
});
//p
router.get('/diverse_user', function(req, res, next) {
  console.log("category name");
  db.diverse_user([req.body.username], function(err, result) {
    console.log(result);
    res.send(result);
  });
});
module.exports = router;
