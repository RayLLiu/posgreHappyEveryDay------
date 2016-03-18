

var pg = require('pg');


var client = new pg.Client({
    user: "rliu040",
    password: "",
    database: "rliu040",
    port: 15432,
    host: "web0.site.uottawa.ca",
    ssl: true
});





client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});
