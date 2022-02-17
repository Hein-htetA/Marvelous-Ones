$(document).ready(function(){
    $("#classroom_carousel").carousel( { interval: 10000 } );
    $("#classroom_carousel_button").click(function(){
        if ($("#classroom_carousel_button").find("span").hasClass('fa-pause')) {
            $("#classroom_carousel").carousel('pause');
            $("#classroom_carousel_button").find("span").removeClass('fa-pause');
            $("#classroom_carousel_button").find("span").addClass('fa-play');
        }
        else if ($("#classroom_carousel_button").find("span").hasClass('fa-play')){
            $("#classroom_carousel").carousel('cycle');
            $("#classroom_carousel_button").find("span").removeClass('fa-play');
            $("#classroom_carousel_button").find("span").addClass('fa-pause');                    
        }
    });
 
});
