$(document).ready(function(){

  $('.').click(function() {
    $('body,html').animate({scrollTop: 0}, 900);
  });

  $('.go_one').click(function() {
    $('html, body').animate({
        scrollTop: $('.one').offset().top
      }, 900);
  });

  $('.go_two').click(function() {
    $('html, body').animate({
        scrollTop: $('.two').offset().top
      }, 900);
  });

  $('.go_three').click(function() {
    $('html, body').animate({
        scrollTop: $('.three').offset().top
      }, 900);
  });



  });
