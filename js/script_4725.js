(function($){
    $(function(){
        $(".red-one").click(function(){
            const testmarg = parseFloat($(this).css("margin-left"));
            if (testmarg === 0) {
                $(this).animate({
                    "margin-left" : "500px"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "margin-left" : "0px"
                }, 2000);
            }
        });
        
        $(".red-one").click(function(){
            const testpohyb = $(this).find("h2");
            if (testpohyb.text() === "Margin-left") {
                testpohyb.text("Paráda");
            }
            
            else {
                testpohyb.text("Margin-left");
            }
        });
        
        $(".green-one").click(function(){
            const testrcolor = $(this).css("background-color");
            if (testrcolor === "rgb(255, 195, 31)") {
                $(this).animate({
                    "background-color" : "rgb(71, 239, 9)"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "background-color" : "rgb(255, 195, 31)"
                }, 2000);
            }
        });
        
        $(".green-one").click(function(){
            const writecolor = $(this).find("h2");
            if (writecolor.text() === "Change-color") {
                writecolor.text("zelená");
            }
            
            else {
                writecolor.text("Change-color");
            }
        });
        
        $(".blue-one").click(function(){
            const testopa = parseFloat($(this).css("opacity"));
            if (testopa === 1) {
                $(this).animate({
                    "opacity" : 0.4 
                }, 1000);
            }
            
            else {
                $(this).animate({
                    "opacity" : 1.0 
                }, 1000);
            }
        });
        
        $(".blue-one").click(function(){
            const opatext = $(this).find("h2");
            if (opatext.text() === "Opacity") {
                opatext.text("0.4");
            }
            
            else {
                opatext.text("Opacity");
            }
        });
    });
})(jQuery);