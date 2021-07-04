$(document).ready(function() {
    $("#fingerprint").hover(function(){
        $(".fingerprint").fadeOut(3000);
        setTimeout(function(){  
            $("#main").fadeIn(3000);
         }, 3000);    
    });
});