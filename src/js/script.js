$(window).load(function () {
  $('body').addClass('loaded');
  setTimeout(function () {
    $('.loader-wrapper').remove();
  }, 2000);
});

  $('.header__lang').click(function () {
    $(".ui-icon").toggleClass('open');
  });


$('body').on('click', '.modal-open', function(e) {
    
  $('.modal__background, .header__modal').css('display', 'flex');
  e.preventDefault();
})

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
    $(".modal__background, .header__modal").hide();
    $(".header__nav").removeClass('open');
    $(".header__burger").removeClass('open');
    $(".ui-icon").removeClass('open');
    $('.modal__background, .header__modal').css('display', 'none');
 }
});

$( "#header__lang-select" ).selectmenu();

  $( ".header__lang" ).appendTo('.header__nav');
  
  $(document).ready(function() {
    $(".header__burger").click(function(e) {
        $(".header__burger").toggleClass('open');
        $(".header__nav").toggleClass('open');
        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.header__burger, .header__burger *, .header__nav, .header__nav *, .header__lang, .header__lang *')) {
          $(".header__nav").removeClass('open');
          $(".header__burger").removeClass('open');
          $(".ui-icon").removeClass('open');
           $('.modal__background, .header__modal').css('display', 'none');
        }
    });
});