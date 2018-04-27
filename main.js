/* Navigation stuff */

(function( $ ){

  var volNavigation = $(".chapter-nav");
      sticky = "stickemup";
      header = $('.large-header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > header ) {
      volNavigation.addClass(sticky);
    } else {
      volNavigation.removeClass(sticky);
    }
  });

})( jQuery );
