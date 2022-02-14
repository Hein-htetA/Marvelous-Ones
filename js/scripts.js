$(document).ready(function(){
    $("#classroom_carousel").carousel( { interval: 2000 } );
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
    $("#feedback_carousel").carousel( { data-interval: false } );
    $("#feedback_carousel_button").click(function(){
        if ($("#feedback_carousel_button").find("span").hasClass('fa-pause')) {
            $("#feedback_carousel").carousel('pause');
            $("#feedback_carousel_button").find("span").removeClass('fa-pause');
            $("#feedback_carousel_button").find("span").addClass('fa-play');
        }
        else if ($("#feedback_carousel_button").find("span").hasClass('fa-play')){
            $("#feedback_carousel").carousel('cycle');
            $("#feedback_carousel_button").find("span").removeClass('fa-play');
            $("#feedback_carousel_button").find("span").addClass('fa-pause');                    
        }
    });

});
