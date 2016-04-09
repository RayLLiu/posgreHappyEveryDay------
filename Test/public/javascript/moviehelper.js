var movie_data;
var page;
var global_i;
$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/get_movie_list",
    data: {},
    success: function(result) {
      $('#image-gallery-image1').attr('src', result[0].image);
      $("#frame").attr("src", "http://www.youtube.com/embed/" + result[0].trailer.replace(/\s+/g, '') + "?rel=0&autoplay=0");
     $('#image-gallery-title1').text(result[0].name.replace(/\s+/g, ''));
   //$('#image-gallery-caption1').text(result[0].name.replace(/\s+/g, ''));


      movie_data = result;
      var length = result.length;
      var grid_length = 12;
      if (length < grid_length) {
        grid_length = length;
      }
      var id = "#grid" + 1;
      var $movie_row = $("#grid1");
      var string1;
      var string2;
      var i = 0;
      var a=1;
      var img_id;
      var html;
      for (i = 0; i < 12; i++) {
        string1 = result[i].image;
        string2 = result[i].name;
        string1 = string1.replace(/\s+/g, '');
        string2 = string2.replace(/\s+/g, '');

        id = "#g" + a;
        img_id = "img" + a;
        $movie_row = $(id);
        var html=" <a id='"+img_id+"' class='thumbnail' href='#' data-image-id='' data-toggle='modal' data-target='#image-gallery"+a+"' data-title='Im so nice' data-caption='And if there is money left, my girlfriend will receive this car' data-image='"+string1+"' ><img class='img-responsive' src='"+string1+"' style='width:390px;height:260px;' alt='Another alt text'></a>";
        //var ss="<a href='#' class='btn btn-default meat' data-img='http://i.imgur.com/R3WLi9s.jpg'> <input type='image' src='http://i.imgur.com/R3WLi9s.jpg' alt='Submit' width='48' height='48'></a>";
        $movie_row.empty();
        //$movie_row.append("<div id='" + id + "' class='col-lg-3 col-md-4 col-xs-6 thumb'>");
        // $movie_row.append("    <a class='thumbnail' href='#' data-image-id='' data-toggle='modal' data-title='Im so nice' data-caption='And if there is money left, my girlfriend will receive this car' data-image='http://upload.wikimedia.org/wikipedia/commons/7/78/1997_Fiat_Panda.JPG' >");
        // $movie_row.append("      <img class='thumbnail img-responsive' src='" + string1 + "' alt='Another alt text' style='width:390px;height:260px;'>");
        // $movie_row.append("</a>");
        $movie_row.append(html);
        $('#image-gallery-image'+a).attr('src', result[i].image);
        $("#frame"+a).attr("src", "http://www.youtube.com/embed/" + result[i].trailer.replace(/\s+/g, '') + "?rel=0&autoplay=0");
       $('#image-gallery-title'+a).text(result[i].name.replace(/\s+/g, ''));
        a++;
       }
       global_i=i;
    }


  });


  $('#right').click(function(){
    var length = movie_data.length;
    var grid_length = 12;
    if (length < grid_length) {
      grid_length = length;
    }
    var id = "#grid" + 1;
    var $movie_row = $("#grid1");
    var string1;
    var string2;
    if(global_i>=length){
      global_i=0;
    }
    var a=1;
    var img_id;
    var html;
    for (i = 0; i < 12; i++) {
      string1 = movie_data[global_i].image;
      string2 = movie_data[global_i].name;
      string1 = string1.replace(/\s+/g, '');
      string2 = string2.replace(/\s+/g, '');

      id = "#g" + a;
      img_id = "img" + a;
      $movie_row = $(id);
      var html=" <a id='"+img_id+"' class='thumbnail' href='#' data-image-id='' data-toggle='modal' data-target='#image-gallery"+a+"' data-title='Im so nice' data-caption='And if there is money left, my girlfriend will receive this car' data-image='"+string1+"' ><img class='img-responsive' src='"+string1+"' style='width:390px;height:260px;' alt='Another alt text'></a>";
      //var ss="<a href='#' class='btn btn-default meat' data-img='http://i.imgur.com/R3WLi9s.jpg'> <input type='image' src='http://i.imgur.com/R3WLi9s.jpg' alt='Submit' width='48' height='48'></a>";
      $movie_row.empty();
      //$movie_row.append("<div id='" + id + "' class='col-lg-3 col-md-4 col-xs-6 thumb'>");
      // $movie_row.append("    <a class='thumbnail' href='#' data-image-id='' data-toggle='modal' data-title='Im so nice' data-caption='And if there is money left, my girlfriend will receive this car' data-image='http://upload.wikimedia.org/wikipedia/commons/7/78/1997_Fiat_Panda.JPG' >");
      // $movie_row.append("      <img class='thumbnail img-responsive' src='" + string1 + "' alt='Another alt text' style='width:390px;height:260px;'>");
      // $movie_row.append("</a>");
      $movie_row.append(html);
      $('#image-gallery-image'+a).attr('src', movie_data[global_i].image);
      $("#frame"+a).attr("src", "http://www.youtube.com/embed/" + movie_data[global_i].trailer.replace(/\s+/g, '') + "?rel=0&autoplay=0");
     $('#image-gallery-title'+a).text(movie_data[global_i].name.replace(/\s+/g, ''));
   global_i++;
   global_i=global_i%length;
   a++;
    }

  });









 });
//
//
//
//
// // loading the page with info
