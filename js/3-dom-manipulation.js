$(function(){
    'use strict';
    var tekstParagrafuPierwszego=$('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    //  Dodawanie tekstu
    $('.paragraf').text(tekstParagrafuPierwszego);
    
    //  Dodawanie HTML
    $(".paragrafnext").html("To jest <strong>paragraf </strong> z dodanym </br> HTML");
    $(".paragrafnext").prepend("POCZĄTEK-----");
    $(".paragrafnext").append("------KONIEC");
    $(".paragrafnext").after("---AFTEREK----");
    
    //Usuwanie tekstu
    $("strong").remove();
    $(".paragraf").empty();
    
    //Dodanie css
    $(".paragrafnext").css({'font-size': '3em', 'color':'red'});
    
    //Dodawanie klasy
    $('h1').addClass('blue');
    $('h1').attr('value', '5');
    
})