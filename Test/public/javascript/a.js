// loading the page with info
$(document).ready(function() {
  //a and b
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/get_movie_list",
    data: {},
    success: function(result) {
      var $movie_list = $("#movie_list");
      $movie_list.empty();
      $.each(result, function(index, value) {
        $movie_list.append("<li><a>" + result[index].name + "</a></li>");
      });
      var $movie_list1 = $("#movie_list1");
      $movie_list1.empty();
      $.each(result, function(index, value) {
        $movie_list1.append("<li><a>" + result[index].name + "</a></li>");
      });
    }
  });
  //c
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/get_topic_list",
    data: {},
    success: function(result) {
      var $topic_list = $("#topic_list");
      $topic_list.empty();
      $.each(result, function(index, value) {
        $topic_list.append("<li><a>" + result[index].description + "</a></li>");
      });
      var $topic_list2 = $("#topic_list2");
      $topic_list2.empty();
      $.each(result, function(index, value) {
        $topic_list2.append("<li><a>" + result[index].description + "</a></li>");
      });
    }
  });
  //d
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/actor_appear_most",
    data: {},
    success: function(result) {
      var $query_d_rows = $("#query_d_rows");
      $query_d_rows.empty();
      $.each(result, function(index, value) {
        $query_d_rows.append("<tr>");
        $query_d_rows.append("<td>" + result[index].first_name + "</td>");
        $query_d_rows.append("<td>" + result[index].last_name + "</td>");
        $query_d_rows.append("<td>" + result[index].date_of_birth + "</td>");
        $query_d_rows.append("<td>" + result[index].country + "</td>");
        $query_d_rows.append("<td>" + result[index].name + "</td>");
        $query_d_rows.append("<td>" + result[index].movie_id + "</td>");
        $query_d_rows.append("</tr>");
      });
    }
  });
  //e
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/two_most_actors",
    data: {},
    success: function(result) {
      var $query_e_rows = $("#query_e_rows");
      $query_e_rows.empty();
      $.each(result, function(index, value) {
        $query_e_rows.append("<tr>");
        $query_e_rows.append("<td>" + result[index].first_name + "</td>");
        $query_e_rows.append("<td>" + result[index].last_name + "</td>");
        $query_e_rows.append("<td>" + result[index].date_of_birth + "</td>");
        $query_e_rows.append("</tr>");
    });
  }
  });
  //f
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/ten_highest_rating_movies",
    data: {},
    success: function(result) {
      var $query_f_rows = $("#query_f_rows");
      $query_f_rows.empty();
      $.each(result, function(index, value) {
        $query_f_rows.append("<tr>");
        $query_f_rows.append("<td>" +(index+1)+"  "+ result[index].name + "</td>");
        $query_f_rows.append("</tr>");
    });
  }
  });
  //g
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/highest_rating_movie_and_topic",
    data: {},
    success: function(result) {
      var $query_g_rows = $("#query_g_rows");
      $query_g_rows.empty();
      $.each(result, function(index, value) {
        $query_g_rows.append("<tr>");
        $query_g_rows.append("<td>" +result[index].name + "</td>");
        $query_g_rows.append("<td>" +result[index].date_released + "</td>");
        $query_g_rows.append("<td>" +result[index].country + "</td>");
        $query_g_rows.append("<td>" +result[index].description + "</td>");
        $query_g_rows.append("</tr>");
    });
  }
  });
  //h
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/user_rating_number",
    data: {},
    success: function(result) {
      var $query_h_rows = $("#query_h_rows");
      $query_h_rows.empty();
      $.each(result, function(index, value) {
        $query_h_rows.append("<tr>");
        $query_h_rows.append("<td>" +result[index].name + "</td>");
        $query_h_rows.append("<td>" +result[index].first_name + "</td>");
        $query_h_rows.append("<td>" +result[index].last_name + "</td>");
        $query_h_rows.append("<td>" +result[index].total_number_of_rating + "</td>");
        $query_h_rows.append("</tr>");
    });
  }
  });
  //i
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/movie_not_rated_2016",
    data: {},
    success: function(result) {
      var $query_i_rows = $("#query_i_rows");
      $query_i_rows.empty();
      $.each(result, function(index, value) {
        $query_i_rows.append("<tr>");
        $query_i_rows.append("<td>" +result[index].name + "</td>");
        $query_i_rows.append("<td>" +result[index].date_released + "</td>");
        $query_i_rows.append("<td>" +result[index].country + "</td>");
        $query_i_rows.append("</tr>");
    });
  }
  });
  //j
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/get_user_list",
    data: {},
    success: function(result) {
      var $user_list = $("#user_list");
      $user_list.empty();
      var string;
      $.each(result, function(index, value) {
        string="<li><a value="+result[index].user_id+">" + result[index].first_name+"  "+result[index].last_name + "</a></li>";
        console.log(string);
        $user_list.append("<li><a value="+result[index].user_id+">" + result[index].first_name+"  "+result[index].last_name + "</a></li>");
      });
    }
    });

});














$(document.body).on('click', '.dropdown-menu li', function(event) {

  var $target = $(event.currentTarget);

  $target.closest('.btn-group')
    .find('[data-bind="label"]').text($target.text())
    .end()
    .children('.dropdown-toggle').dropdown('toggle');

  return false;

});


$(document.body).on('click', '#movie_list li a', function(e) {
  var name = $(this).text();


  $.ajax({
    type: "POST",
    url: "http://localhost:3000/users/get_movie",
    data: {
      moviename: name
    },
    success: function(result) {
      $('#movie_table').bootstrapTable({
        columns: [{
          field: 'name',
          title: 'Movie Name'
        }, {
          field: 'DATE',
          title: 'Date released'
        }, {
          field: 'Country',
          title: ' Country'
        }],
        data: [{
          name: result[0].name,
          DATE: result[0].date_released,
          Country: result[0].country
        }]
      });
      var trailer = result[0].trailer;
      trailer = trailer.replace(/\s+/g, '');

      $("#frame").attr("src", "http://www.youtube.com/embed/" + trailer + "?rel=0&autoplay=1");
    }
  });

});


$(".contentContainer").css("min-height", $(window).height());
