$(function(){
    'use strict';
    
    $("body").find("p").eq(1).css({'color': 'green'});
    $('p').each(function(i,obj){
        $(this).addClass('paragraf'+i);
        console.log(this);
        console.log(obj);
    })
})