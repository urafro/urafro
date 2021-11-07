$(document).ready(function() {
  /* scroll on button click */
  $('.js--scroll-to-intro').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--intro').offset().top-70
    }, 2000);
  });

  $('.js--scroll-to-features').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--features').offset().top-50
    }, 2000);
  });

  $('.js--scroll-to-about').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--about').offset().top
    }, 2000);
  });

  $('.js--scroll-to-contact').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--contact').offset().top
    }, 2000);
  });

  /* show/hide features on pricing template */
  //show/hide eFeatures section
  $('.js--show-hide-features').click(() => {
    $('.eFeatures').toggleClass('smeFeatures--hidden');
  });

  //display appropriate button info bases on the visibility of eFeatures
  $('.js--show-hide-features').click(() => {
    if ($('.ePrice__bottom--btnIcon').hasClass('fa-plus')) {
      $('.ePrice__bottom--btn').html('<i class="fas fa-minus ePrice__bottom--btnIcon"></i> Hide plan features');
    } else {
      $('.ePrice__bottom--btn').html('<i class="fas fa-plus ePrice__bottom--btnIcon"></i> Show plan features');
    }
  });
  
});