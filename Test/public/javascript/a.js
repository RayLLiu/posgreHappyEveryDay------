// loading the page with info
$(document).ready(function() {
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
});

$(document.body).on('click', '.dropdown-menu li', function(event) {

  var $target = $(event.currentTarget);

  $target.closest('.btn-group')
    .find('[data-bind="label"]').text($target.text())
    .end()
    .children('.dropdown-toggle').dropdown('toggle');

  return false;

});


$(document.body).on('click', '.dropdown-menu li a', function(e) {
  var name=$(this).text();


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
       $("#frame").attr("src", "http://www.youtube.com/embed/"+ result[0].trailer +"?rel=0&autoplay=1");
      alert(result[0].country);
    }
  });

});


$(".contentContainer").css("min-height", $(window).height());
$(document).ready(function() {
  $.getJSON("data.js", {
      name: "John",
      time: "2pm"
    })
    .done(function(json) {
      console.log("JSON Data: " + json.users[3].name);
    })
    .fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.log("Request Failed: " + err);
    });
});
