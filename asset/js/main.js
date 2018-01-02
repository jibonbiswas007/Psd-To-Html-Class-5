(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        $('.video-play-btn').magnificPopup();
        $(".count").counterUp({
        	delay: 10,
        	time: 2000
        });
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));