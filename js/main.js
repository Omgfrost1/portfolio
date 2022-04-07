$(function () {

  $(".menu a, .header__anchor, .footer a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('body').toggleClass('menu__open');
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__content').toggleClass('header__content--active');
    $('.header__anchor').toggleClass('header__anchor--active');
  });


  var mixer = mixitup('.works__content');

});

window.onscroll = function showHeader() {

  var header = document.querySelector('.header__top');

  if (window.pageYOffset > 720) {
    header.classList.add('header__fixed');
  }
  else {
    header.classList.remove('header__fixed');
  }

}
