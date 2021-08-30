// Script for Swipper Slide

    var swiper = new Swiper(".slide-depoimentos", {
        slidesPerView: 3,
        spaceBetween: 32,
        pagination: {
          el: ".s-card-depoimentos .container .top .swiper-pagination",
          clickable: true,
        },
        breakpoints:{
          320 : {
              slidesPerView: 1.3,
              spaceBetween: 16,
          },
          600: {
            slidesPerView: 2.3,
            spaceBetween: 15,
          },
          1200: {
              slidesPerView: 3,
              spaceBetween: 32,
          }
        }
    });

// Script to change background color header

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $("#cabecalho").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $("#cabecalho").removeClass("active");
  }
});

// AOS Animate 

AOS.init({
  duration : 1000, // duration of the animation
  once: true       // execute only once
});


// Menu Mobile
