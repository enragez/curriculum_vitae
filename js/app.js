$(document).ready(function(){ 
    
    var headerArrow = $("#header-arrow");
    
    headerArrow.click(function() {
        headerArrow.addClass('arrow-clicked');
        
        $('html,body').animate({
            scrollTop: $(".skills").offset().top
        }, 1000, null, function() {
            headerArrow.removeClass('arrow-clicked');
        });
    });
});