// Script for Swipper Slide

    var swiper = new Swiper(".slide-depoimentos", {
        slidesPerView: 3,
        spaceBetween: 32,
        pagination: {
          el: ".s-card-depoimentos .container .top .swiper-pagination",
          clickable: true,
        },
    });

