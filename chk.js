        var h = window.outerHeight;
        var w = window.outerWidth;
        if(h>550 && w>550){
            window.location.assign('./index_home.html');
        }
        else{
            sessionStorage.setItem('browser','mobile');
        }