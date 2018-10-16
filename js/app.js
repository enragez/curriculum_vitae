$(document).ready(function(){ 
    
    var headerArrow = $(".header-arrow");
    
    headerArrow.click(function(event){
        event.preventDefault();
        headerArrow.addClass('arrow-clicked');
        $('html, body').stop().animate({
            scrollTop: $(".skills").position().top
        }, 600, null, function() {
            headerArrow.removeClass('arrow-clicked');
        });
    });
});