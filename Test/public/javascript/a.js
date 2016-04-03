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


$(document.body).on('click', '#movie_list li a', function(e) {
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
      var trailer=result[0].trailer;
      trailer = trailer.replace(/\s+/g, '');

       $("#frame").attr("src", "http://www.youtube.com/embed/"+trailer+"?rel=0&autoplay=1");
    }
  });

});


$(".contentContainer").css("min-height", $(window).height());
