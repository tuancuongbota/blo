$(document).ready(function() {
	$(".bota_block_info_btn,.bota_block_table_price_btn").click(function() {
        $('html, body').animate({
           scrollTop: $('footer').offset().top
        }, 'slow');
    });
      $(".bota_menu_mobile").click(function(e) {
        e.stopPropagation();
        $('.bota_mobile_slidebar').toggleClass('open_sidebar_menu');
        $('.opacity_menu').toggleClass('open_opacity');
    });
    $('.opacity_menu').click(function(e) {
        $('.bota_mobile_slidebar').removeClass('open_sidebar_menu');
        $('.opacity_menu').removeClass('open_opacity');
    });
    $(".bota_faq_question").on("click", function () {
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    });
    $('.slider-for-hot').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-hot'
    });
    $('.slider-nav-hot').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for-hot',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('.slick-blo-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slick-blo-nav'
  });
  $('.slick-blo-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slick-blo-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true
  });
    $('.slick-features').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});