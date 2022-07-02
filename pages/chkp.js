        var h = window.outerHeight;
        var w = window.outerWidth;
        if(h>550 && w>550){
            window.location.replace('../home.html');
        }
        else{
            sessionStorage.setItem('browser','mobile');
        }
function forceRedirect(){window.location.replace('../home.html')};
var squint = document.getElementById('squint');
squint.addEventListener('click',forceRedirect);