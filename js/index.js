$(document).ready(function() {
    $("#fingerprint").click(function(){
        $(".fingerprint").fadeOut(3000);
        setTimeout(function(){  
            $("#main").fadeIn(3000);
         }, 3000);    
    });
});