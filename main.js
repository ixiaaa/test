$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".title").offset().top},
        'slow');
});