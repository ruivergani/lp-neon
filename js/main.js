// Script for Swipper Slide

    var swiper = new Swiper(".slide-depoimentos", {
        slidesPerView: 3,
        spaceBetween: 32,
        pagination: {
          el: ".s-card-depoimentos .container .top .swiper-pagination",
          clickable: true,
        },
    });

// Script to change background color 

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $("#cabecalho").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $("#cabecalho").removeClass("active");
  }
});



