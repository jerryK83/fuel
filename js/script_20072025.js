(function($){
    $(function(){
        $(".mobile-ham").click(function(){
            $(".mobile-back").fadeToggle(500);
            $("nav ul").slideToggle(500);
        });
        
        $(window).resize(function(){
            if ($(window).width() > 600) {
                $("nav ul").removeAttr("style");
            }
        });
        
        $(".hamburger").click(function(){
            if($(this).attr("src") === "images/ikony/hamburger.png") {
                $(this).attr("src", "images/ikony/crossnew.png");
            }
            
            else {
                $(this).attr("src", "images/ikony/hamburger.png");
            }
        });
        
        $(".first-box").click(function(){
            const testrmargin = parseFloat($(this).css("margin-left"));
            if (testrmargin === 10) {
                $(this).animate({
                    "margin-left" : "600px"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "margin-left" : "10px"
                }, 2000);
            }
            
        });
        
        $(".first-box").click(function(){
            const gettext = $(this).find("h3");
            if (gettext.text() === "first box") {
                gettext.text("Margin");
            }
            
            else {
                gettext.text("first box");
            }
        });
        
        $(".second-box").click(function(){
            const testrcolor = $(this).css("background-color");
            if (testrcolor === "rgb(244, 137, 59)") {
                $(this).animate({
                    "background-color" : "rgb(244, 198, 7)"
                }, 1000);
            }
            
            else {
                $(this).animate({
                    "background-color" : "rgb(244, 137, 59)"
                }, 1000);
            }
        });
        
        $(".second-box").click(function(){
            const testrtexta = $(this).find("h3");
            if (testrtexta.text() === "second box") {
                $(this).text("Pozor změna");
            }
            
            else {
                $(this).text("second box");
            }
        });
        
        $(".third-box").click(function(){
            const testropa = parseFloat($(this).css("opacity"));
            if (testropa === 1) {
                $(this).animate({
                    "opacity" : "0.5"
                }, 1000);
            }
            
            else {
                $(this).animate({
                    "opacity" : "1"
                }, 1000);
            }
        });
        
        $(".third-box").click(function(){
            const textrthird = $(this).find("h3");
            if (textrthird.text() === "third box") {
                textrthird.text("Opacity 0.5");
            }
            
            else {
                 textrthird.text("third box");
            }
        });
    });
})(jQuery);