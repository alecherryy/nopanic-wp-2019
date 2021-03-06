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

  // rotate about images on hover
  var about = ["wp-content/themes/nopanic/images/about/image-1.jpg", "wp-content/themes/nopanic/images/about/image-2.jpg","wp-content/themes/nopanic/images/about/image-3.jpg","wp-content/themes/nopanic/images/about/image-4.jpg","wp-content/themes/nopanic/images/about/image-5.jpg","wp-content/themes/nopanic/images/about/image-6.jpg","wp-content/themes/nopanic/images/about/image-7.jpg"];
  var aboutCurrent = 0;

  $('.about').mouseover(function() {
    aboutCurrent++;
    aboutCurrent %= about.length;
    $("#frontImage").attr("src", about[aboutCurrent]);
    $("#hoverText").text('Who we are');
  });
  
  // rotate doing images on hover
  var doing = ["wp-content/themes/nopanic/images/doing/image-1.jpg", "wp-content/themes/nopanic/images/doing/image-2.jpg","wp-content/themes/nopanic/images/doing/image-3.jpg","wp-content/themes/nopanic/images/doing/image-4.jpg"];
  var doingCurrent = 0;

  $('.doing').mouseover(function() {

    doingCurrent++;
    doingCurrent %= doing.length;
    $("#frontImage").attr("src", doing[doingCurrent]);
    $("#hoverText").text('Why we do it');
  });
  
  // rotate just images on hover
  var just = ["wp-content/themes/nopanic/images/just/image-1.jpg", "wp-content/themes/nopanic/images/just/image-2.jpg","wp-content/themes/nopanic/images/just/image-3.jpg"];
  var justCurrent = 0;

  $('.just').mouseover(function() {

    justCurrent++;
    justCurrent %= just.length;
    $("#frontImage").attr("src", just[justCurrent]);
    $("#hoverText").text('How we work');
  });
  
  // rotate something images on hover
  var something = ["wp-content/themes/nopanic/images/just/image-1.jpg", "wp-content/themes/nopanic/images/just/image-2.jpg", "wp-content/themes/nopanic/images/just/image-2.jpg"];
  var somethingCurrent = 0;

  $('.something').mouseover(function() {

    somethingCurrent++;
    somethingCurrent %= something.length;
    $("#frontImage").attr("src", something[somethingCurrent]);
    $("#hoverText").text('What we have done ');
  });

  $('.front-wrapper__inner a').mouseover(function() {
    setTimeout(function () {   
      $('.front-wrapper__hover').addClass('is-showing');
    }, 500);
  });

  $('.front-wrapper__inner a').mouseout(function() {
    $('.front-wrapper__hover').removeClass('is-showing');
  });

  // change page color
  var color = ['is-black', 'is-blue','is-red', 'is-pink','is-dark-blue','is-white'];
  var current = 0;
  $('.page-animate').on('click',function() {

    $(this).removeClass('is-pink is-red is-white is-black is-blue is-dark-blue');
    $('.why-video-overlay_wrapper').removeClass('is-pink is-red is-white is-black is-blue is-dark-blue');
    current++;
    current %= color.length;
    $(this).addClass(color[current]);
    $('.why-video-overlay_wrapper').addClass(color[current]);
  });

  // parallax effect
  $('.paroller, [data-paroller-factor]').paroller({
    factor: 0.05, 
    type: 'foreground', 
    direction: 'vertical', // vertical, horizontal
    transition: 'transform .1s ease-in-out'
  });

  // svg icons animate
  $(window).scroll(function() {
    var top_of_element = $('.icon').offset().top;
    var bottom_of_element = $('.icon').offset().top + $('.icon').outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('.icon').addClass('is-animated');
    }
  });

  // reveal on scroll
  AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out-cubic',
    mirror: true
  });

  var drawRipple = function(ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    var node = document.querySelector(".no-panic-ripple");
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = ev.clientX - 5 + "px";
    newNode.style.top = ev.clientY - 5 + "px";
    node.parentNode.replaceChild(newNode, node);
  };
  
  //Ripple Triggers
  window.addEventListener("click", drawRipple);

  // toggle video
  $('.video-js-toggle').on('click', function() {
    $('.why-video-overlay').show().removeClass('animation-out').addClass('animation-in');
  })
  
  $('.video-js-toggle--close').on('click', function() {
    $('#whyVideo').pause();
    $('.why-video-overlay').addClass('animation-out');
    setTimeout(function () {   
      $('.why-video-overlay').hide().removeClass('animation-in');
    }, 3400);
  })

  // fallback for safari SVG clip-path
  var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    $('.why-video').hide();
    $('.why-video--fallback').show();
  }
  // mobile menu 
  $('#menuIcon').on('click', function() {

    if($(this).hasClass('is-open')) {

      $('body').removeClass('no-scroll');
      $(this).removeClass('is-open');
      setTimeout(function () { 
        $('.nav-main-inner').removeClass('is-showing')
      }, 500);
      // $('.menu--main').removeClass('is-showing');
      $('.menu--main').fadeTo(500, 0);
    } else {
      $(this).addClass('is-open');
      $('.nav-main-inner').addClass('is-showing');
      // $('.menu--main').addClass('is-showing');
      $('.menu--main').fadeTo(500, 1);
    }
  });

  $(function(){
    $(window).bind('resize',function(){
      // console.log($(this).width())
      if($(this).width() < 768){
        $('.nav-main-inner').addClass('is-hidden');
      }
      else{
        $('.nav-main-inner').removeClass('is-hidden');
        $('.menu--main').fadeTo(0, 1);

        $(document).ready(function() {
          document.cookie = 'onetime=true'
          
          if (document.cookie != 'onetime=true') {
            $('.front-welcome').hide();
          } else {
            $('.front-welcome').show();

            $('.front-intro-link--red').on('click', function(e) {
              e.preventDefault(); 

              $(this).parent().find('img').addClass('is-out');
              $('.front-intro--red').css({
                'opacity':'0',
                'z-index':'19'
              });
              $('.front-intro--white').find('img').addClass('is-in');
            });
            
            $('.front-intro-link--white').on('click', function(e) {
              e.preventDefault(); 

              $('.front-intro--white').slideUp();
              $('.front-intro--red').css('z-index','-1');
            });
          }
        })
      }
    });
    
    $(document).ready(function(){
      // console.log($(this).width())
      if($(window).width() < 768){
        $('.nav-main-inner').addClass('is-hidden');
      }
      else{
        $('.nav-main-inner').removeClass('is-hidden');

        // show intro screen only the first time a user visits the site
        $(document).ready(function() {
          document.cookie = 'onetime=true'
          
          if (document.cookie != 'onetime=true') {
            $('.front-welcome').hide();
          } else {
            $('.front-welcome').show();

            $('.front-intro-link--red').on('click', function(e) {
              e.preventDefault(); 

              $(this).parent().find('img').addClass('is-out');
              $('.front-intro--red').css({
                'opacity':'0',
                'z-index':'19'
              });
              $('.front-intro--white').find('img').addClass('is-in');
            });
            
            $('.front-intro-link--white').on('click', function(e) {
              e.preventDefault(); 

              $('.front-intro--white').slideUp();
              $('.front-intro--red').css('z-index','-1');
            });
          }
        })
      }
    })
  })
});
