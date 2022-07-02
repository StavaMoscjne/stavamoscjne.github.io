        var h = window.outerHeight;
        var w = window.outerWidth;
        if(h>599 && w>599){
            window.location.replace('./home.html');
        }
        else{
            sessionStorage.setItem('browser','mobile');
        }
