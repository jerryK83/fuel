(function($){
    $(function(){
        $(".fm-icon").click(function(){
            $(".fm-panel").slideToggle();
        });
        
        $(".bm-icon").click(function(){
            $(".bm-panel").slideToggle(); 
        });
        
        $(".rt-icon").click(function(){
            $(".rt-panel").slideToggle();
        });
        
        $(".jd-icon").click(function(){
            $(".jd-panel").slideToggle();
        });
        
        $(".fm-icon, .bm-icon, .rt-icon, .jd-icon").click(function(){
           if ($(this).attr("src") == "images/ikony/goldup.png")  {
               $(this).attr("src", "images/ikony/golddown.png");
           }
            else {
                $(this).attr("src", "images/ikony/goldup.png");
            }
        });
        
        $(".first-box").click(function(){
            const testmarg = parseInt($(this).css("margin-left"));
            if (testmarg === 0) {
                $(this).animate({
                    marginLeft : "750px"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    marginLeft : "0px"
                }, 1000);
            }
        });
        
        $(".first-box").click(function(){
            const testheading = $(this).find("h3");
            if (testheading.text() == "Margin-Left") {
                testheading.text("Hurá");
            }
            
            else {
                testheading.text("Margin-Left");
            }
        });
        
        $(".first-box").click(function(){
            const testopa = parseFloat($(this).css("opacity"));
            if (testopa === 1) {
                $(this).animate({
                    opacity : 0.5
                }, 2000);
            }
            
            else {
                $(this).animate({
                    opacity : 1
                }, 1000);
            }
            
        });
    });
})(jQuery);





