/* Navigation stuff */

(function( $ ){

  /* main nav title magic */
  var navTitle = $(".navbar");
      fadeIn = "fade-in";
      header = $('.large-header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > header ) {
      navTitle.addClass(fadeIn);
    } else {
      navTitle.removeClass(fadeIn);
    }
  });

  /* Secondary nav */
  var volNavigation = $(".chapter-nav");
      sticky = "stickemup";
      header = $('.large-header').height();

  $(window).scroll(function() {
    if( $(this).width() > 960 ) {
      if( $(this).scrollTop() > header ) {
        volNavigation.addClass(sticky);
      } else {
        volNavigation.removeClass(sticky);
      }
  }
    if( $(this).width() < 960 ) { {
    if($(this).scrollTop() + $(this).height() == $(document).height()) {
      volNavigation.addClass(sticky);
    } else {
      volNavigation.removeClass(sticky);
    }
   }
  }

  });

})( jQuery );
