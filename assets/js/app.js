$(document).ready(function(){
  // Scrollspy
  $('.scrollspy').scrollSpy();
  // Parallax function
  $('.parallax').parallax();

  // Initialize collapse button
  $(".button-collapse").sideNav();

  // Tooltip
  $('.tooltipped').tooltip();
  
  // Scrolla
  $('.animate').scrolla();

  $('.animate').scrolla({
  mobile: true
  });

  $('.animate').scrolla({
    once: true
  });

  // Scrollreveal
  window.sr = ScrollReveal({ reset: true, mobile: true });

  // Customizing a reveal set
  sr.reveal('.reveal', { duration: 200 });  
});




