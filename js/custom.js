$(document).ready(function() {


    // Style guide nav
    $('#show-nav-sg').click(function(event) {
      $('#nav-sg').toggleClass('normal');
      $('#nav-backdrop').fadeToggle(400);
    });

    $('#nav-backdrop').click(function(event) {
      $('#nav-sg').toggleClass('normal');
      $(this).fadeToggle(400);
    }); 


});