$(document).ready(function () {
    // $('.red').slideUp(3000, function () { 
    //     $('.red').slideDown(3000);
    //  });
     //ho utilizzato una funzione di callback, che mi dice che una volta finito lo slide up inizia console.log();
     //lo slide down  
     
     
     $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#green").offset().top
        }, 500);
    });









});