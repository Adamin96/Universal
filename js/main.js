$(document).ready(function(){
    const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  });
  // Switch slides with arrows
  
  const articleSlider = new Swiper('.article-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.article-slider__button--next',
      prevEl: '.article-slider__button--prev',
    },
  });
  $(document).keydown(function(e){
  if (e.which == 37) {
      $('.article-slider__button--prev')[0].click();
      };  
  if (e.which == 39) { 
      $('.article-slider__button--next')[0].click();
      };      
  })

  //Модальное окно
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal(){
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event){
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  $(document).on('keydown', function(esk) {
    if (esk.which == 27){
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    };
  });

  //Обработка форм
  $(".form").each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Пожалуйста, введите своё имя",
        minlength: "В имени должно быть больше 1 символа",
      },
      email: {
        required: "Нам нужен ваш email, чтобы связяться с вами",
        email: "Ваш email должен быть в виде name@domain.com",
      },
      phone: {
        required: "Ваш телефон обязателен",
        minlength: "В телефоне должно быть 10 цифр",
      },
      message: {
        required: "Введите текст комментария",
        minlength: "Минимальное количество знаков - 100",
      },
    },
  });
  });
  //Маска телефона
  $('.phone').mask('+7 (000) 000-00-00');

  //Библиотека прокрутки
  AOS.init();
});


//Скрипты для этого проекта
$(document).ready(function(){
  //Параллакс
  $('.investigation').parallax({imageSrc: '../img/investigation-background.jpg'});

  //Смена цвета у флага
  var flag1 = $(".item-info__flag--1");
  flag1.on('click', function(){
    $(".item-info__flag--1").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--2");
  flag1.on('click', function(){
    $(".item-info__flag--2").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--3");
  flag1.on('click', function(){
    $(".item-info__flag--3").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--4");
  flag1.on('click', function(){
    $(".item-info__flag--4").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--5");
  flag1.on('click', function(){
    $(".item-info__flag--5").toggleClass("item-info__flag--active")
  });
  var flag1 = $(".item-info__flag--6");
  flag1.on('click', function(){
    $(".item-info__flag--6").toggleClass("item-info__flag--active")
  });
  var flag = $(".article-hero__flag");
  flag.on('click', function(){
    $(".article-hero__flag").toggleClass("article-hero__flag--active")
  });


  //Мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on('click', function(){
    $(".navbar").toggleClass("navbar--mobile")
  });
  var menuButtonLink = $(".menu__link");
  menuButtonLink.on('click', function(){
    $(".navbar").toggleClass("navbar--mobile")
  });

  //Табы
  var tabsItem = $(".hero-recommendations__item");
  var contentItem = $(".hero-article");

  tabsItem.on("click", function(event){
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("hero-recommendations__item--active");
    contentItem.removeClass("hero-article--active");
    $(activeContent).addClass("hero-article--active");
    $(this).addClass("hero-recommendations__item--active");
  });

  //Плавный скролл
  $('a.menu__link').click(function(){
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate({
      scrollTop: destination }, 800);
  });
  $(window).scroll(function(){
    if($(this).scrollTop()!=0){
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function(){
    $('body,html').animate({scrollTop:0}, 800)
  });
  
  //Кнопка показать комментарии
  var commentButton = $(".comments-visible-button");
  commentButton.on('click', function(){
    $(".comments-visible-button").toggleClass("comments-visible-button--hidden");
    $(".comment-hidden").toggleClass("comment-hidden--visible");
  });

  //Слайдер с автоматический прокруткой на главной странице
  const swiper = new Swiper('.readers-slider__container', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,        
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
  
});
});