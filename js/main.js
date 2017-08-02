$(document).ready(function(){  
   $(".navbar_head").sticky({topSpacing:0, zIndex:'50'});

    /*================ Start NavBar =====================*/

    
    
   $('#portfolio').mixItUp();

   $('#portfolio .menu ul li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
   });

    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        autoPlay:true
    });  

  smoothScroll.init({
      offset: 50
  });

  $("html").niceScroll({cursorcolor:"#333",cursorwidth: "10px",cursorminheight:35,zindex:"10000", cursorborder:"none"});
    
   /*================ Typed JS =========================*/

    
    $(window).on("scroll", function(){
        var sc = $(window).scrollTop();
        
        if(sc > 1000) {
            $(".top").fadeIn(1000);
        } else {
            $(".top").fadeOut(1000);
        }
    });
    $(".top").click(function() {
       $("html , body").animate({ scrollTop : 0 } ,  500);
    })
    
    
});