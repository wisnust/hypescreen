$(document).ready(function() {


    // Navbar mobile
    var $topNav = $('.navbar-hypescreen .navbar-nav'),
        $sideNav = $('.sidenav nav'),
        $logoHeight = $('.navbar-hypescreen').height(),
        $topNav_height = $topNav.height();

    $topNav.css('top', $logoHeight);
    $sideNav.css('top', $topNav_height + $logoHeight);


    $('#show-nav-sg').click(function(event) {
        $topNav.add($sideNav).toggleClass('nav-open');
        // $('#nav-backdrop').fadeToggle(400);
    });

    // $('#nav-backdrop').click(function(event) {
    //     $topNav.add($sideNav).toggleClass('nav-open');
    //     $(this).fadeToggle(400);
    // }); 


});