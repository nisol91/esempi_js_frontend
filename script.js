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


    //gestione dei cookies. per esempio faccio vedere una pubblicita solo all inizio della navigazione,
    //per assurdo anche la striscia dei cookie e' un cookie che una volta accettato(settato) scompare per sempre in quella sessione di navigazione
    //in pratica si vede solo se i cookie sono vuoti, solo che il mio if me li riempie subito e quindi se ricarico la pagina, la pubblicita scompare.
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }


    if (getCookie('pub_vista').length == 0) {
        
        $('.pub').show();
        setCookie('pub_vista', true, 1);
    } 







});