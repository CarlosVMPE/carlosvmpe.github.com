$(function () {
    $('.textyle h1').textyle({
        duration: 500,
        delay: 200,
        easing: 'linear',
        callback: function () {
            $(this).css({
                transform: 'translateY(0px) rotateY(360deg)'
            })
        }
    });
    $('.textyle h5').textyle({
        duration: 500,
        delay: 200,
        easing: 'linear',
        callback: function () {
            $(this).css({
                transform: 'translateY(0px) rotateY(360deg)'
            })
        }
    });
    $('.textyle p').textyle();
})