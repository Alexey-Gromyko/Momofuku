function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

    $(document).ready(function() {

        $('.mobile-menu').on('click', function() {
            $('.mobile-menu').toggleClass('active');
            $('.mobile-menu-list').toggleClass('active');
        })

    $('.hero').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    });

    $(function() {
        let tab = $('#tabs .tabs-items > div'); 
	    tab.hide().filter(':first').show(); 

    $('#tabs .tabs-nav a').click(function(){
        tab.hide(); 
        tab.filter(this.hash).fadeIn(); 
        $('#tabs .tabs-nav a').removeClass('active');
        $(this).addClass('active');
          if ($(this).hasClass('active')) {
                $(this).parents('.menu-tabs-box').find('p').addClass('active');
            } else {
                $('.menu-tabs-box').find('p').removeClass('active');
            }
          return false;
      }).filter(':first').click();

   })

  function hideContent() {
    $('.tabs-show-content').hide();
   }
   hideContent();

   $('.show-tabs-content').on('click', function() {
       $(this).toggleClass('active');
       $('.tabs-show-content').toggleClass('show');
       if($('.tabs-show-content').hasClass('show')) {
        $('.tabs-show-content').slideDown();
       } else {
        $('.tabs-show-content').slideUp();
       }
       if($(window).width() < 767) {
        $('.tabs-show-content').toggle("slide").css("display", "flex");
       } 
   })

   $('.customers-slides').slick({
       slidesToShow: 4,
       Infinity: true,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   });

   $('.image-with-slider-slider').slick({
       slidesToShow: 2,
       Infinity: true,
       responsive: [
         {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
         }
       ]
   });



    })