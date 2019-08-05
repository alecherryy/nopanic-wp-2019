jQuery( document ).ready(function( $ ) {

  'use strict';

  // page transitions
  if($('a').hasClass('menu__link')) {

    $('a').click(function(e) {
      e.preventDefault();
      var newLocation = $(this).attr('href');
      // $('body').fadeOut(1000, newpage);
      $('body').fadeTo(1000, 0, function() {
        window.location.href = newLocation
      })
    });

    
  } else {

  $('a').on(function(e) {
    e.preventDefault();
    newLocation = $(this).attr('href');

    $('body').fadeTo(1000, 0, function() {
      window.location.href = newLocation
    });
  });
  }
  
  $(document).ready(function(){
  /*! Fades in whole page on load */
    $('body').fadeTo(1000, 1);
  
  });

  /*! Reloads page on every visit */
  function Reload() {
    try {
    var headElement = document.getElementsByTagName("head")[0];
    if (headElement && headElement.innerHTML)
    headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
    }
    catch (e) {}
  }

  /*! Reloads on every visit in mobile safari */
  if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
    window.onpageshow = function(evt) {
    if (evt.persisted) {
      document.body.style.display = "none";
      location.reload();
      }
    };
  }
});