$(document).ready(function() {
    $t = 1;
    $("#fingerprint").hover(function(){
        timeout = setTimeout(function(){
            $t = 0;
            $(".fingerprint").fadeOut(3000);
            setTimeout(function(){  
                $("#main").fadeIn(3000);
            }, 3000)
        }, 200)
    }, function(){
        console.log("hover, out", $t)
        if($t == 1){
            clearTimeout(timeout)
        }else{
            $t = 1;
        }
    });
});