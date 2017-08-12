// $(window).on('load', function(){
$(document).ready(function(){ 
     
   $(".navbar_head").sticky({topSpacing:0, zIndex:'50'});

    /*================ Start NavBar =====================*/

    
    
   $('#portfolio').mixItUp();

   $('#portfolio .menu ul li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
   });

    /**/

    $('.testimonial-slider').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
    });  

  smoothScroll.init({
      offset: 50
  });

  $("html").niceScroll({cursorcolor:"#333",cursorwidth: "10px",cursorminheight:35,zindex:"10000", cursorborder:"none"});
   /*================ Typed JS =========================*/
    
    /*==============option-box=================*/
		$(".gear-check").click(function(){
		$(".color-option").fadeToggle(1000);
});
    /* ======= change theme color for list ====== */
	var colorLi = $(".option-box .color-option .color li");
	colorLi 
	.eq(0).css("backgroundColor" , "crimson" ).end()
	.eq(1).css("backgroundColor" , "#032f9d" ).end()
	.eq(2).css("backgroundColor" , "#FF7E00" ).end()
	.eq(3).css("backgroundColor" , "#26cfee" ).end()
	.eq(4).css("backgroundColor" , "#FF9899" ).end()
	.eq(5).css("backgroundColor" , "#551B8C" ).end()
    .eq(6).css("backgroundColor" , "#84DE02" ).end()
    .eq(7).css("backgroundColor" , "#3B7A57" ).end()
    .eq(8).css("backgroundColor" , "#FFE135" ).end()
    .eq(9).css("backgroundColor" , "#007FFF" ).end()
    .eq(10).css("backgroundColor" , "#FF9966" ).end()
    .eq(11).css("backgroundColor" , "#A52A2A" ).end()
    .eq(12).css("backgroundColor" , "#7FFFD4" ).end()
    .eq(13).css("backgroundColor" , "#E0218A" ).end()
    .eq(14).css("backgroundColor" , "#FF1493" ).end()
    .eq(15).css("backgroundColor" , "#FF77FF" ).end()
    .eq(16).css("backgroundColor" , "#F7E98E" ).end()
    .eq(17).css("backgroundColor" , "#E95C4B" ).end()
    .eq(18).css("backgroundColor" , "#FF2800" ).end()
    .eq(19).css("backgroundColor" , "#E1A95F" ).end()

	colorLi.click(function(){
		$("link[href*='theme']").attr("href" , $(this).attr("data-value"));
	});
    
        $(".option-box .color-option .color h4 i").click(function(){
       $(".option-box .color-option .color li").slideToggle(500); 
        if( $(this).hasClass("collapsed") ) {
            $(this).toggleClass("fa-minus");
        }
    });
    
    /* ======= change theme Font for list ====== */
    var fontLi = $(".option-box .color-option .font li");
    fontLi
    .eq(0).css("font-family", "Saira Semi Condensed, sans-serif").end()
    .eq(1).css("font-family", "Raleway, sans-serif").end()
    .eq(2).css("font-family", "'Anton', sans-serif").end()
    .eq(3).css("font-family", "'Quicksand', sans-serif").end()
    .eq(4).css("font-family", "font-family: 'Josefin Slab', serif").end()
    .eq(5).css("font-family", "'Arvo', serif").end()
    .eq(6).css("font-family", "'Lato', sans-serif").end()
    .eq(7).css("font-family", "'Vollkorn', serif").end()
    .eq(7).css("font-family", "'Ubuntu Condensed', sans-serif").end()
    .eq(7).css("font-family", "'Droid Sans', sans-serif").end()
    
    fontLi.click(function(){
        $("link[href*='myfont']").attr("href", $(this).attr("data-value"));
    });
    
    $(".option-box .color-option .font h4 i").click(function(){
       $(".option-box .color-option .font li").slideToggle(500); 
        if( $(this).hasClass("collapsed") ) {
            $(this).toggleClass("fa-minus");
        }
    });
///////////////////////////////////////////////////
    /* ============= CounterUp ===================== */
          
        $(".counter-text span").counterUp({
            delay: 5,
            time: 1000
        }); 
         
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        
        if(sc > 1000) {
            $(".top").fadeIn(1000);
        } else {
            $(".top").fadeOut(1000);
        }
    });
    $(".top").click(function(){
       $("html , body").animate({ scrollTop : 0 } ,  500);
    });
    
    
});
// }); 