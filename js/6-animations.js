'use strict';


$(function(){
    'use strict';
    var flagDisplay=false;
    var allPara=$('p');
    console.log(allPara);
    $('p').fadeOut(1000).fadeIn(1000, function(){
        if(!flagDisplay){
         console.log("Dokonało się");
         flagDisplay=true;   
        } 
    });  
    allPara.hover(function(){
        $(this).css({'transform': 'rotateY(-180deg)', 'transition': '1s all ease'});
    },function(){
         $(this).css({'transform': 'rotateY(0)', 'transition': '1s all ease'});
    });
    
    $('h2').slideUp(3000).slideDown(3000);
//    allPara.mouseleave(function(){
//        $(this).css('color','inherit');
//    })
    function animacja(){
        console.log('Start drugiej');
        $('h3').animate({'font-size':'1em', 'margin-left':'0px'},1000)
    }
    
    $('h3').click(function(){
        $(this).animate({'font-size':'3em', 'margin-left':'100px'},2000,animacja)
    })
    
})