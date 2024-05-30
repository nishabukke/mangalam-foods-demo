// sticky header

$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() > $("#sticky-wrapper").position().top) {
      $('.sticky-area').css('width', '100%');
      $('.sticky-area').css('max-width', '1600px');
      $('.sticky-area').css('margin', '0px auto');
      $('.sticky-area').css('position', 'fixed');
      $('.sticky-area').css('top', '0px');
      $('.sticky-area').css('background', '#222');
      $('.sticky-area').css('transition', 'all .3s');
      $('.sticky-area').css('z-index', '1111');
      $('.sticky-area').css('box-shadow', '0 0 5px rgba(0, 0, 0, .8)');
      $('#sticky-wrapper').addClass('is-sticky');
  
    }
    else{
    $('.sticky-area').removeAttr('style');
  
    }
    
  });