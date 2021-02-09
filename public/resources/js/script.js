$(document).ready(function() {
  /* scroll on button click */
  $('.js--scroll-to-intro').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--intro').offset().top
    }, 1000);
  });

  $('.js--scroll-to-features').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--features').offset().top-50
    }, 1000);
  });

  $('.js--scroll-to-about').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--about').offset().top
    }, 1000);
  });

  $('.js--scroll-to-contact').click(() => {
    $('html, body').animate({
      scrollTop: $('.js--section--contact').offset().top
    }, 1000);
  });
  
});