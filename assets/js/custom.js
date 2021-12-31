/* CUSTOM */

$(function() {
    /* owl carousel */
    $('.owl-service').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:3,
                nav:false,
                loop:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });

    $('.owl-testimonials').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:1,
                nav:false,
                loop:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
})