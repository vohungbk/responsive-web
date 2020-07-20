$(document).ready(function () {
    $('.js-section-feature').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    })

    /** Animation scroll */
    $('.js-scroll-to-shop').click(function () {
        $('html,body').animate({ scrollTop: $('.js-section-image').offset().top }, 1000)
    })

    $('.js-scroll-to-timeline').click(function () {
        $('html,body').animate({ scrollTop: $('.js-section-timeline').offset().top }, 1000)
    })

    $('.js-wp-1').waypoint(function () {
        $('.js-wp-1').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })

    $('.js-wp-2').waypoint(function () {
        $('.js-wp-2').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    })

    $('.js-wp-3').waypoint(function () {
        $('.js-wp-3').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    })

    /** Mobile nav */
    $('.js-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round')
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round')
            icon.removeClass('ion-close-round')
        }
    })
})