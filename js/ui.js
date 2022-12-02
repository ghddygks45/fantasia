$(function(){


    $(window).on('scroll', function(){
        if($('#fp-nav li').eq(2).find('>a').hasClass('active')){
            $('#fp-nav').addClass('trans');
        } else{
            $('#fp-nav').removeClass('trans');
        }
    })

    $(window).on('scroll', function(){
        if($(window).width() >= 1418){
            if($(window).scrollTop() >= 300){
                $('.top').fadeIn(500)
            } else{
                $('.top').fadeOut(500)   
            }
        } else{
            $('.top').fadeOut(500)
        }
    })

    $(".top").on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500);
        return false;
    });


    // 관련기관 링크 open, close
    $(document).on('click', ".mobile", function(e){
        if(!$(e.target).hasClass('title')){
            $('.more_link_sec').removeClass('open')
        } else{
            $('.more_link_sec').toggleClass('open')
        }
        
    })

    
    
    // 미세먼지 주의보
     $('.btn_fold').on('click', function(){
         $(this).closest('.header_top').slideUp(200)
         $('.ctn').removeClass('default');
     })

     $(".sec01 .slide_area").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows:true,
        autoplaySpeed:3000,
        speed:1500,
        pauseOnHover:true,
        responsive: [
            {
              breakpoint: 1417,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                autoplay: true,
                autoplaySpeed:3000,
                speed:1500,
                infinite: true,
                variableWidth: true       
              }
            },
        ]

   });

   $(".sec02 .conent_area").slick({
        slidesToShow: 3,
        autoplay: false,
        arrows:false,
        responsive: [
            {
            breakpoint: 1418,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                autoplay: true,
                autoplaySpeed:3000,
                speed:1500,
                infinite: false,
                variableWidth: true       
            }
            },
        ]

    });

    $(".sec03 .slide_area").slick({
        slidesToShow: 5,
        autoplay: false,
        arrows:false,
        responsive: [
            {
            breakpoint: 1418,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                autoplay: true,
                autoplaySpeed:3000,
                speed:1500,
                infinite: false,
                variableWidth: true       
            }
            },
        ]

    });

    $(".sec04 .slide_area").slick({
        slidesToShow: 1,
        autoplay: false,
        arrows:false,
        autoplaySpeed:3000,
        speed:1500,
        dots:true,
        responsive: [
            {
            breakpoint: 1418,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                autoplaySpeed:3000,
                speed:1500,
                dots:true,
                autoplay: true,
                infinite: false,
            }
            },
        ]

    });



})