/***** MasonryPortfolio function start *****/
if ($('.portfolio-wrap').length > 0) {
    var $container = $('.portf'),
        $body = $('body');

    /*Filter*/
    $(document).on("click", "#filters a", function (e) {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('#portfolio').isotope({ filter: selector });
        return false;
    });
    /*Filter*/
} else {
    var onResizePort = function () { };
}
/***** MasonryPortfolio function End *****/

/*****Ready function start*****/
$(document).ready(function () {
    matResume();
});
/*****Ready function end*****/

/***** Resize function start *****/
$(window).on("resize", function () {
    setHeightWidth();
}).resize();
/***** Resize function end *****/

// Edad
let edad = document.getElementById('edad');
edad.innerHTML = 2019 - 1996 + ' años';