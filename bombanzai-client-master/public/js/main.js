$(document).ready(function() {

  'use strict';

  $('h1').animate({opacity: 1}, 400, function() {
    $('h2').delay(600).animate({opacity: 1}, 400, function() {
      $('.actual').delay(1000).animate({opacity: 1}, 400, function() {
        $('#windows').delay(150).animate({opacity: 1}, 400, function() {
          $('#linux').delay(150).animate({opacity: 1}, 400, function() {
            $('#mac').delay(150).animate({opacity: 1}, 400, function() {
              $('footer').delay(250).animate({opacity: 1}, 400);
            });
          });
        });
      });
    });
  });


  if (navigator.platform == 'Win32') {
    $('#windows a.x32').addClass('active');
  } else if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1 ) {
    $('#windows a.x64').addClass('active');
  } else if (navigator.platform == 'Linux x86_64') {
    $('#linux a.x32').addClass('active');
  } else if (navigator.platform == 'Linux i686') {
    $('#linux a.x64').addClass('active');
  } else if (navigator.platform == 'Macintosh' || navigator.platform == 'MacIntel') {
    $('#mac a.x64').addClass('active');
  }

});