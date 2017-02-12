'use strict';
function ajax(options){
    options={
        type: options.type || "POST",
        url: options.url || "",
        onComplete: options.onComplete || function(){},
        onError:  options.onError||function(){},
        onSuccess: options.onSuccess || function(){},
        dataType: options.dataType || "text"
    }
    
    //Funkcja sprawdza czy się udało
    function htttpSuccess(httpRequest){
        try{
            return (httpRequest.status >=200 &&httpRequest.status <300 ||
                   httpRequest.status==304 || navigator.userAgent.indexOf("Safari")>=0 && typeof httpRequest.status=="undefined");
        }catch(e){
                return false;
        }
    }
    
    // Utworzenie obiektu
    var httpReq= new XMLHttpRequest();
    // Otwarcie połączenia
    httpReq.open(options.type,options.url,true);
    
    //
    httpReq.onreadystatechange=function(){
        if(httpReq.readyState==4){
            if(htttpSuccess(httpReq)){
                //Jesli format XML to zwróć XML a jesli tekst to tekst
                var returnData= (options.dataType=="xml")? httpReq.responseXML:
                httpReq.responseText;
                
                // Jesli wszystko ok
                options.onSuccess(returnData);
                
                //Wyzerowanie obiektu
                httpReq.null;
            }else{
                //Jesli błąd
                options.onError(httpReq.statusText);
            }
        }
    }
    httpReq.send();
}



function pobierzDane(event){
    event.preventDefault();
//    console.log(event);
    
    ajax({
        type: "GET",
        url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        onError: function(msg){
            console.log(msg);
        },
        onSuccess: function(response){
            var jsonObj= JSON.parse(response);
            console.log(jsonObj);
            var pUserId= document.createElement('p');
            var pUserName= document.createElement('p');
            var pUserURL= document.createElement('p');
            
            pUserId.innerHTML="User ID: "+jsonObj.userId;
            pUserName.innerHTML="User name: " + jsonObj.userName;
            pUserURL.innerHTML="User URL: http://" + jsonObj.userURL+"<br>------";
            
            document.body.appendChild(pUserId);
            document.body.appendChild(pUserName);
            document.body.appendChild(pUserURL);
            
            
        }
        
    })
}