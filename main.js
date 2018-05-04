/* Navigation stuff */

(function( $ ){

  if ($('body').attr('id') == 'inner-page') {
    var prevPosY = 0;
    $(window).scroll( function() {
      var posY          = this.scrollY,
          headerZone    = $('header').height(),
          volNavigation = $(".chapter-nav"),
          sticky        = "stickemup";

      if ($(window).width() > 960) {
        if (posY < headerZone) {
          $('nav').removeClass('nav--up nav--down stickemup').addClass('nav--header');
        } else if (posY < prevPosY) {
          $('nav').removeClass('nav--header nav--down').addClass('nav--up');
        } else {
          $('nav').removeClass('nav--up nav--header').addClass('nav--down');
          volNavigation.addClass(sticky);
        }
      } else {
        if ($(this).scrollTop() + $(this).height() > $(document).height() - 300) {
          volNavigation.addClass(sticky);
        } else {
          volNavigation.removeClass(sticky);
        }
    }

      prevPosY = posY;
    });
  }

})( jQuery );
