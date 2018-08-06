$(function () {
    'use strict'
    //Adjust Slider Height
       var winH    =$(window).height(),
       navH =$('.navbar').innerHeight();
    $('.features, .carousel-item').height(winH - ( navH ));
    
    
   $('.collapse .nav-item').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $("html").niceScroll({
        cursorcolor: " #8f62dc",
        cursorwidth: "8px",
        cursorspeed: ""
    });
    
    $(".count").countTo();
    
        
        
    
        $(window).scroll(function(){
            
       if($(window).scrollTop() >= 1000){
           
          $('.scroll-to-top').fadeIn(400); 
           
       } else{
           
           $('.scroll-to-top').fadeOut(400);  
       } 
        
    });
    
    $('.scroll-to-top').click(function (event){
        
        event.preventDefault();
        
        $('html, body').animate({
            
            scrollTop:0
            
        },1000);
    });
    
    
});

    