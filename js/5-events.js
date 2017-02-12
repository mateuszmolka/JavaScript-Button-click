$(function(){
    'use strict';
    var helpVar=0
    
    $('p').click(function(){
        if(helpVar==0){
            $(this).css({'color': 'orange', 'background-color':'blue'});
            helpVar=1;
        }else{
           $(this).css({'color': 'black', 'background-color':'white'});
            helpVar=0; 
        }     
    })
    
    $('h1').on({
        'click': function(){
            $(this).css({'color': 'orange', 'background-color':'blue'});
        },
        
        'mouseleave':function(){
            $(this).css({'color': 'inherit', 'background-color':'inherit'});
        }
    })
})