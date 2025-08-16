(function($){
    $(function(){
        $(".first").click(function(){
            const testml = parseFloat($(this).css("margin-left"));
            if (testml === 0) {
                $(this).animate({
                    "margin-left" : "500px"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "margin-left" : "0px"
                }, 1500);
            }
        });
        
        $(".first").click(function(){
            const testheading = $(this).find("h2");
            if (testheading.text() == "First box") {
                testheading.text("test");
            }
            
            else {
                testheading.text("First box");
            }
        });
        
        $(".second").click(function(){
            const testrgb = $(this).css("background-color");
            console.log("Kliknuto, barva je:", testrgb);
            if (testrgb == "rgba(3, 170, 54, 0.9)") {
                $(this).animate({
                    "backgroundColor" : "rgba(103, 70, 14, 0.9)"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "backgroundColor" : "rgba(3, 170, 54, 0.9)"
                }, 2000);
            }
        });
        
        $(".third").click(function(){
           const opacitytest = parseFloat($(this).css("opacity"));
            if (opacitytest === 1) {
                $(this).fadeTo(2000, 0.2);
            }
            else {
                $(this).fadeTo(2000, 1);
            }
        });
        
        $(".m-i").click(function(){
           $(".mobile-nav").fadeToggle(1000);
            $("nav ul").slideToggle(1000);
        });
        
        $(window).resize(function(){
            if($(window).width() > 600) {
                $("nav ul").removeAttr("style");
            }
        });
        
        $(".jq--scroll-slider").click(function(){
            $("html, body").animate({
                scrollTop : $ (".jq--slider").offset().top
            }, 2000);
        });
    });
})(jQuery);