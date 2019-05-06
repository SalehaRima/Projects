$(function () {
    var $nav = $('.full-nav');
    var $dis = $nav.offset().top;
    var $topicon = $('.topbtn i');
    var $htmlbody = $('html,body');



    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling >= $dis) {
            $nav.addClass('position-fixed');
        } else {
            $nav.removeClass('position-fixed');
        }

    });


    $('.full-nav  .navbar-nav li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $htmlbody.animate({
                    scrollTop: target.offset().top - 70
                }, 1600);
                return false;
            }
        }
    });


    $('.topbtn').on('click', function () {

        $htmlbody.animate({

            scrollTop: 0

        }, 2000);



    });

    $(window).on('scroll', function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling >= $dis) {
            $nav.addClass('position-fixed');
        } else {
            $nav.removeClass('position-fixed');
        }

        // back to top button

        if ($scrolling >= 200) {

            //$topicon.fadeIn();
            $(".topbtn").fadeIn();

        } else {
            $(".topbtn").fadeOut();
        }

    });



    $('.slider-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });


    $('.screen-slick').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]

    });

    $('.venobox').venobox({
        spinColor: '#744fa0',
        spinner: 'cube-grid',
    });


    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerPadding: 0,
        centerMode: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
    },
           
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]

    });

    $('.text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-slider'
    });

    $('.img-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.text-slider',
        dots: false,
        autoplay: true,
        centerPadding: 0,
        centerMode: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
         dots: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                   
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });






})
