$('.owl-carousel').owlCarousel({
    loop:true,
    margin:7,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ["Anterior", "Próximo"],
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
})