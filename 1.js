$(document).ready(function() {
    $('#menu1').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#content-menu1').offset().top
        }, 800);
    });
    $('#menu2').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#content-menu2').offset().top
        }, 800);
    });
    $('#menu3').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#content-menu3').offset().top
        }, 800);
    });
    $('#menu4').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#content-menu4').offset().top
        }, 800);
    });
    $('#menu5').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#content-menu5').offset().top
        }, 800);
    });
});