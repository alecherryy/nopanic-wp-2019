// Custom scripts file

jQuery( document ).ready(function( $ ) {

  'use strict';

  // Generic function that runs on window resize.
  function resizeStuff() {
  }

  // Runs function once on window resize.
  var TO = false;
  $(window).resize(function () {
    if (TO !== false) {
      clearTimeout(TO);
    }

    // 200 is time in miliseconds.
    TO = setTimeout(resizeStuff, 200);
  }).resize();
  
  // intro screen js
  $('.front-intro-link--red').on('click', function(e) {
    e.preventDefault(); 

    $(this).find('h1').addClass('is-out');
    $('.front-intro--red').css({
      'opacity':'0',
      'z-index':'14'
    });
    $('.front-intro--white').find('h1').addClass('is-in');
  });
  
  $('.front-intro-link--white').on('click', function(e) {
    e.preventDefault(); 

    $('.front-intro--white').slideUp();
    $('.front-intro--red').css('z-index','-1');
  });
  
  $('.site-logo').mouseover(function() {
    // $('body').css('cursor', 'none');
    $('.cursor').addClass('is-in');
  });

  $('.site-logo').mouseout(function() {
    // $('body').css('cursor', 'default');
    $('.cursor').removeClass('is-in');
  });

  // rotate about images on hover
  var about = ["wp-content/themes/nopanic/images/about/image1.jpg", "wp-content/themes/nopanic/images/about/image2.jpg","wp-content/themes/nopanic/images/about/image3.jpg","wp-content/themes/nopanic/images/about/image4.jpg"];

  function getAboutImage() {
    var index = Math.floor(Math.random() * about.length);
    return about[index];
  }

  $('.about').mouseover(function() {
    $('.front-wrapper__hover').addClass('is-showing');

    var image = getAboutImage();
    $("#frontImage").attr("src", image);
  });

  $('.about').mouseout(function() {
    $('.front-wrapper__hover').removeClass('is-showing');
  });
  
  // rotate doing images on hover
  var doing = ["wp-content/themes/nopanic/images/doing/image1.jpg", "wp-content/themes/nopanic/images/doing/image2.jpg","wp-content/themes/nopanic/images/doing/image3.jpg","wp-content/themes/nopanic/images/doing/image4.jpg"];

  function getDoingImage() {
    var index = Math.floor(Math.random() * doing.length);
    return doing[index];
  }

  $('.doing').mouseover(function() {
    $('.front-wrapper__hover').addClass('is-showing');

    var image = getDoingImage();
    $("#frontImage").attr("src", image);
  });

  $('.doing').mouseout(function() {
    $('.front-wrapper__hover').removeClass('is-showing');
  });
  
  // rotate just images on hover
  var just = ["wp-content/themes/nopanic/images/just/image1.jpg", "wp-content/themes/nopanic/images/just/image2.jpg"];

  function getJustImage() {
    var index = Math.floor(Math.random() * just.length);
    return just[index];
  }

  $('.just').mouseover(function() {
    $('.front-wrapper__hover').addClass('is-showing');

    var image = getJustImage();
    $("#frontImage").attr("src", image);
  });

  $('.just').mouseout(function() {
    $('.front-wrapper__hover').removeClass('is-showing');
  });
  
  // rotate something images on hover
  var something = ["wp-content/themes/nopanic/images/just/image1.jpg", "wp-content/themes/nopanic/images/just/image2.jpg"];

  function getSomethingImage() {
    var index = Math.floor(Math.random() * something.length);
    return something[index];
  }

  $('.something').mouseover(function() {
    $('.front-wrapper__hover').addClass('is-showing');

    var image = getSomethingImage();
    $("#frontImage").attr("src", image);
  });

  $('.something').mouseout(function() {
    $('.front-wrapper__hover').removeClass('is-showing');
  });

  // change color on click
  // rotate something images on hover
  var color = ['is-red','is-pink','is-white','is-black','is-blue','is-dark-blue'];

  function changeColor() {
    var index = Math.floor(Math.random() * color.length);
    return color[index];
  }

  // change page color
  $('.page-animate').on('click',function() {
    $(this).removeClass('is-pink is-red is-white is-black is-blue is-dark-blue');

    var change = changeColor();
    $(this).addClass(change);
  });

  $('.paroller, [data-paroller-factor]').paroller({
    factor: 0.05, 
    type: 'foreground', 
    direction: 'vertical', // vertical, horizontal
    transition: 'transform .1s ease-in-out'
  });
});
