var h = window.outerHeight;
var w = window.outerWidth;
if(w<500){
        window.location.replace("./index.html");
        }
        else{
            sessionStorage.setItem('browser','desktop');
        }
