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

    /*On Resize Portfolio Function*/
    var onResizePort = function () {
        $body.find('.portf').each(function () {
            var winWidth = window.innerWidth;
            var container_mock = $('.gallery-wrap').width();
            columnNumb = 1;
            var attr_col = $(this).attr('data-col');

            if (winWidth >= 1466) {

                $('.portfolio-wrap').css({ width: container_mock });
                $('.portfolio-wrap.no-gutter').css({ width: container_mock });
                $('.portfolio-wrap.no-gutter.full-width').css({ width: 100 + '%' });
                var portfolioWidth = $('.portfolio-wrap').width();

                if (typeof attr_col !== typeof undefined && attr_col !== false) {
                    columnNumb = $(this).attr('data-col');
                } else columnNumb = 3;

                var postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {
                    $(this).css({
                        width: postWidth - 20 + 'px',
                        height: 'auto',
                        margin: 10 + 'px'
                    });
                    $('.no-gutter .' + $(this).attr('class')).css({
                        width: postWidth + 'px',
                        height: 'auto',
                        margin: 0 + 'px'
                    });
                    $('.wide.' + $(this).attr('class')).css({
                        width: postWidth * 2 - 20 + 'px'
                    });
                    $('.no-gutter .wide.' + $(this).attr('class')).css({
                        width: postWidth * 2 + 'px'
                    });
                    $('.tall.' + $(this).attr('class')).css({
                        height: 'auto'
                    });
                    $('.small.' + $(this).attr('class')).css({
                        height: 'auto',
                    });

                    $('.no-gutter .tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.wide-tall.' + $(this).attr('class')).css({
                        width: postWidth * 2 - 20 + 'px',
                        height: postWidth * 2 - 20 + 'px'
                    });
                    $('.no-gutter .wide-tall.' + $(this).attr('class')).css({
                        width: postWidth * 2 + 'px',
                        height: 'auto',
                    });
                });


            } else if (winWidth > 1024) {

                $('.portfolio-wrap').css({ width: container_mock });
                $('.portfolio-wrap.no-gutter').css({ width: container_mock });
                var portfolioWidth = $('.portfolio-wrap').width();

                if (typeof attr_col !== typeof undefined && attr_col !== false) {
                    columnNumb = $(this).attr('data-col'); //alert(columnNumb);
                } else columnNumb = 3;

                postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {

                    $(this).css({
                        width: postWidth - 20 + 'px',
                        height: 'auto',
                        margin: 10 + 'px'
                    });

                    $('.no-gutter .' + $(this).attr('class')).css({
                        width: postWidth + 'px',
                        height: 'auto',
                        margin: 0 + 'px'
                    });
                    $('.wide.' + $(this).attr('class')).css({
                        width: postWidth * 2 - 20 + 'px'
                    });
                    $('.no-gutter .wide.' + $(this).attr('class')).css({
                        width: postWidth * 2 + 'px'
                    });
                    $('.tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.small.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.no-gutter .tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.wide-tall.' + $(this).attr('class')).css({
                        width: postWidth * 2 - 20 + 'px',
                        height: 'auto',
                    });
                    $('.no-gutter .wide-tall.' + $(this).attr('class')).css({
                        width: postWidth * 2 + 'px',
                        height: 'auto',
                    });
                });


            } else if (winWidth > 767) {

                $('.portfolio-wrap').css({ width: container_mock });
                $('.portfolio-wrap.no-gutter').css({ width: container_mock });
                var portfolioWidth = $('.portfolio-wrap').width(),

                    columnNumb = 2;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {
                    $(this).css({
                        width: postWidth - 20 + 'px',
                        height: 'auto',
                        margin: 10 + 'px'
                    });
                    $('.no-gutter .' + $(this).attr('class')).css({
                        width: postWidth + 'px',
                        height: 'auto',
                        margin: 0 + 'px'
                    });
                    $('.wide.' + $(this).attr('class')).css({
                        width: postWidth * 2 - 20 + 'px'
                    });
                    $('.no-gutter .wide.' + $(this).attr('class')).css({
                        width: postWidth * 2 + 'px'
                    });
                    $('.tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.small.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.no-gutter .tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.wide-tall.' + $(this).attr('class')).css({
                        width: postWidth * 2 - 20 + 'px',
                        height: postWidth + 'px',
                    });
                    $('.no-gutter .wide-tall.' + $(this).attr('class')).css({
                        width: postWidth * 2 + 'px',
                        height: 'auto',
                    });
                });


            } else if (winWidth > 479) {

                $('.portfolio-wrap').css({ width: container_mock });
                $('.portfolio-wrap.no-gutter').css({ width: container_mock });
                var portfolioWidth = $('.portfolio-wrap').width(),

                    columnNumb = 1;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {
                    $(this).css({
                        width: postWidth - 20 + 'px',
                        height: 'auto',
                        margin: 10 + 'px'
                    });
                    $('.no-gutter .' + $(this).attr('class')).css({
                        width: postWidth + 'px',
                        height: 'auto',
                        margin: 0 + 'px'
                    });
                    $('.wide.' + $(this).attr('class')).css({
                        width: postWidth - 20 + 'px'
                    });
                    $('.no-gutter .wide.' + $(this).attr('class')).css({
                        width: postWidth + 'px'
                    });
                    $('.tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.small.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.no-gutter .tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.wide-tall.' + $(this).attr('class')).css({
                        width: postWidth - 20 + 'px',
                        height: postWidth + 'px',
                    });
                    $('.no-gutter .wide-tall.' + $(this).attr('class')).css({
                        width: postWidth + 'px',
                        height: postWidth + 'px',
                    });
                });


            }

            else if (winWidth <= 479) {

                $('.portfolio-wrap').css({ width: container_mock });
                $('.portfolio-wrap.no-gutter').css({ width: container_mock });
                var portfolioWidth = $('.portfolio-wrap').width(),

                    columnNumb = 1;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $(this).find('.item').each(function () {
                    $(this).css({
                        width: postWidth - 20 + 'px',
                        height: 'auto',
                        margin: 10 + 'px'
                    });
                    $('.no-gutter .' + $(this).attr('class')).css({
                        width: postWidth + 'px',
                        height: 'auto',
                        margin: 0 + 'px'
                    });
                    $('.wide.' + $(this).attr('class')).css({
                        width: postWidth - 20 + 'px'
                    });
                    $('.no-gutter .wide.' + $(this).attr('class')).css({
                        width: postWidth + 'px'
                    });
                    $('.tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.small.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.no-gutter .tall.' + $(this).attr('class')).css({
                        height: 'auto',
                    });
                    $('.wide-tall.' + $(this).attr('class')).css({
                        width: postWidth - 20 + 'px',
                        height: postWidth + 'px',
                    });
                    $('.no-gutter .wide-tall.' + $(this).attr('class')).css({
                        width: postWidth + 'px',
                        height: postWidth + 'px',
                    });
                });


            }
            //alert();

            //return columnNumb;
        });
        $container.isotope({
            itemSelector: '.item',
            gutter: 0,
            layoutMode: 'packery',
            transitionDuration: "0.8s"
        });
    };
    /*On Resize Portfolio Function*/
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
    onResizePort();
}).resize();
/***** Resize function end *****/