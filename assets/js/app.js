$(document).ready(function(){
  // Parallax function
  $('.parallax').parallax();
  // Initialize collapse button
  $(".button-collapse").sideNav();
});

  $(".foo, .bar").smoove({
    offset: '15%',
    // moveX is overridden to -200px for ".bar" object
    moveX: '100px',
    moveY: '100px',
  });