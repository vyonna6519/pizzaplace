var swiper = new Swiper(".menu-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".extras-slider", {
    loop: true,
    spaceBetween: 40,
    autoHeight: true,
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });