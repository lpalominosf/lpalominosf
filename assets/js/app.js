$(document).ready(function(){
  // Parallax function
  $('.parallax').parallax();
  // Initialize collapse button
  $(".button-collapse").sideNav();

  $('.tooltipped').tooltip();

  $('.animate').scrolla();

  $('.animate').scrolla({
  mobile: true
  });

  $('.animate').scrolla({
    once: true
  });

  window.sr = ScrollReveal({ reset: true, mobile: true });

// Customizing a reveal set
  sr.reveal('.reveal', { duration: 200 });
});



