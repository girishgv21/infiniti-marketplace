$(function() {
    console.log('Working')
    let headerHeight = jQuery('header').outerHeight();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > headerHeight) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
        
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('header').addClass('hide');
        } else {
            $('header').removeClass('hide');
        }
        lastScrollTop = st;
    });

    $('.mobile-menu').on('click', function() {
        $(this).toggleClass('active')
        $('.header-nav').toggleClass('active')
        $('body').toggleClass('overlay')
    })
    
})