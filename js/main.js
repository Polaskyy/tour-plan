var hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
})
$('.parallax-window').parallax({ imageSrc: 'img/background.jpg' })

var menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке меню')
  document
    .querySelector('.navbar-bottom')
    .classList.toggle('navbar-bottom--visible')
})
ymaps.ready({
  // successCallback будет вызван, когда загрузятся API и модуль "myModule1".
  require: ['myModule1'],
  successCallback: function (ym) {
    var map = new ymaps.Map('map', {
      center: [55.75, 37.62],
      zoom: 11,
    })
    var obj = new ymaps.myModule1()
    // ...
  },
})
