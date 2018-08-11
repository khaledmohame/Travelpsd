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
    
     $(".typeme").typed({
        strings: ["Travel"],
        startDelay: 1500,
        showCursor: false,
    });
    
    $(".typemein").typed({
        strings: ["Template"],
        startDelay: 1500,
        showCursor: false,
    });
    
     $(".typemeinfo").typed({
        strings: ["+0201111555678"],
        startDelay: 1500,
        showCursor: false,
    });
    
  var isDone = false;
    
        $(window).scroll(function() {
            
            if( ! isDone && $(window).scrollTop() >= 1000 ) {
               
           $(".count").countTo({});
               
             isDone = true;  
        
           }
            
        });
    
        
        
    
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

    
