var swiper = new Swiper(".menu-slider", {
    loop: true,
    spaceBetween: 40,
    autoplay: {
        delay:7500,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });