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
    autoheight: true,
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

  $('.submit').click(function () {
    var Name = $('#name').val();
    var extras = $('#extras').val();
    var Address = $('#address');
    if (Name == '' || address == '' || extras == '') {
        alert('Please fill in the form correctly!');
    } else {
        alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
    }
  });
  