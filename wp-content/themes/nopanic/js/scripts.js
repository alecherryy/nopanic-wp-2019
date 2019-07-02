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
      'z-index':'19'
    });
    $('.front-intro--white').find('h1').addClass('is-in');
  });
  
  $('.front-intro-link--white').on('click', function(e) {
    e.preventDefault(); 

    $('.front-intro--white').slideUp();
    $('.front-intro--red').css('z-index','-1');
    $('.menu--social').addClass('fadeInUp');
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

  // change page color
  var color = ['is-red','is-pink','is-white','is-black','is-blue','is-dark-blue'];
  var current = 0;
  
  $('.page-animate').on('click',function() {
    
    $(this).removeClass('is-pink is-red is-white is-black is-blue is-dark-blue');
    current++; // add one to click count
    current %= color.length; // if count is larger than length of array use modulus to return to beginning
    $(this).addClass(color[current]);
  });

  // parallax effect
  $('.paroller, [data-paroller-factor]').paroller({
    factor: 0.05, 
    type: 'foreground', 
    direction: 'vertical', // vertical, horizontal
    transition: 'transform .1s ease-in-out'
  });

  //scroll magic 
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: ".who-image-scroll"})
  // trigger animation by adding a css class
  .setClassToggle(".who-image-scroll", "opacity")
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: ".who-grid"})
  // trigger animation by adding a css class
  .setClassToggle(".line", "is-animated")
  .addTo(controller);
});
