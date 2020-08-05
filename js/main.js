$(document).ready(function () {
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

  var menuButton = $('.menu-button')
  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible')
  })
  ymaps.ready(function () {
    // Создание карты.
    var myMap = new ymaps.Map('mymap', {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [-8.8367, 115.152],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 13,
      }),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: 'Hilton bali resort',
          balloonContent: 'Hilton bali resort',
          iconContent: 'Hilton Bali resort',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',

          // Своё изображение иконки метки.
          iconImageHref: 'img/pointer.png',
          // Размеры метки.
          iconImageSize: [30, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
          iconContentOffset: [5, 30],
        },
      )

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent)
  })

  var modalButton = $('[data-toggle=modal]')
  var closeModalButton = $('.modal__close')
  modalButton.on('click', openModal)
  closeModalButton.on('click', closeModal)

  function openModal() {
    var targetModal = $(this).attr('data-href')
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible')
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible')
  }
  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }
  //Обработка форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: 'Укажите Имя',
          minlength: 'Имя должно быть не короче 2 букв',
        },
        email: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
        phone: {
          required: 'Телефон обязателен',
        },
      },
    })
  })
  $('.phone').ready(function () {
    $('.phone__us').mask('(000) 000-0000')
  })
})
