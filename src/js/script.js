
//карусель блок трассы
$(document).ready(function(){
  $('#ananas').slick({
   slidesToShow: 5,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
   ]
  });


  

  $('#tree').slick({
    slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
        ]
      });

  $('#apple').slick({
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
      responsive: [  
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false
          }
        }
        ]
      });

  // $(".select-menu>.select__list>.select__item").hover(function(){
  //   $(this).children(".select__list").stop(false, true).fadeIn(200);
  //   }, 
  //   function(){
  //    $(this).children(".select__list").stop(false, true).fadeOut(200);
  //  });

   $("a").click(function(){
    var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top;
     $('html, body').animate({ scrollTop: destination }, 900);
     return false;
     });

$(".select-menu>.select__list>.select__item").click(function(){
    $(this).children(".select__list").slideToggle(400);
    
   });

  $("a").click(function(){
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 900);
    return false;
    });


  $(".humburger-hide").hide();
  $(".contacts__cross").hide();
  $(".hamburger").click(function(){
    $(".humburger-hide").slideToggle("slow", function(){
      $(".rocks__wrapper-hide").css({'display':'none'});
      $(".hamburger").hide();
      $(".contacts__cross").show();
    });
  });
  $(".contacts__cross").click(function(){
    $(".humburger-hide" ).slideToggle("slow", function(){
      $(".rocks__wrapper-hide").css({'display':'block'});
      $(".hamburger").show();
      $(".contacts__cross").hide();
    });
  });

  $('.test-popup-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom mfp-zoom',
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 500 
    }
  });
  // $('.item-gallary').click(function() {
  //   $('.overlay').show();
  //   $('body').css('overflow-y', 'hiden')
  //   $(this).find('.item-gallary__img').clone().appendTo('.overlay__wrapper');
  //  }); 
  $('.table-price__data--price').click(function() {
    $(this).toggleClass('table-price__data--active');
  });
  
  $(".item-gallary__loupe").hide();
  $(".item-gallary").mouseenter(function(){
    $(".item-gallary__loupe").fadeIn("slow",function(){
    });
  });
  $( ".item-gallary" ).mouseleave(function() {
    $( ".item-gallary__loupe" ).fadeOut( "slow",function() {
    });
  });
}); 


