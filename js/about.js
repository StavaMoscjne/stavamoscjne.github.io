function stylePop(){
    var sylP = document.getElementById('styleTap');
    sylP.style.opacity='1';
    sylP.style.marginLeft="0";
}

setTimeout(stylePop,2);
styleReadyState = () => {endSecure.style.zIndex="1"};

    var styleIde = document.querySelector("#styleTap");
    var styleTapWrap = document.querySelector('.styleTapWrap');
    var endSecure = document.querySelector(".tailEndSecure");
    var restoreBack = document.querySelector('#restoreBack');
    var restoreUp = document.querySelector('#restoreUp');
    var restoreDown = document.querySelector('#restoreDown');
    var themeBtn1 = document.querySelector('.themeButtons');
    var themeBtn2 = document.querySelector('.themeButtons2');
    var qual = document.getElementsByClassName('Qual');
    var homeKey = document.getElementsByClassName('homeKey')[0];

setPref = (a) => {localStorage.setItem('setPreference','set'); localStorage.setItem('ambience',a); return}

window.onload = function(){
            if(localStorage.getItem("setPreference")=="set"){
            themeBtn2.style.zIndex="-9";
            var theme = localStorage.getItem('ambience');
            switch(theme) {
                case "dark": 
                    dark();
                    break;
                case "light": 
                    light();
                    break;
                case "steel": 
                    steel();
                    break;
                case "navy": 
                    blue();
                    break;
                case "dusk": 
                    dusk();
                    break;
                case "bella": 
                    belle();
                    break;
                default: console.log(localStorage.getItem("ambience"));
            }
        }
    else{
        localStorage.setItem("setPreference","unset");
    }}
    homeKeyReady =()=>{
        homeKey.style.opacity='1';
        homeKey.style.transform="translateY(-130px)";
    }
    styleSelect= () => {
    styleReadyState();
    homeKeyReady();
    restoreBack.style.opacity=restoreDown.style.opacity='1';
    restoreBack.style.zIndex='6';
    restoreUp.style.opacity='1';
    themeBtn2.style.zIndex='-9';
    themeBtn1.style.zIndex='4';
    restoreDown.style.zIndex='4';
    styleIde.style.color='yellow'; 
    styleIde.style.opacity='0';
    styleTapWrap.style.zIndex="2";
    styleTapWrap.style.transform='translateY(40px)';
    themeBtn1.style.opacity='1';
    themeBtn1.style.transform='translateY(-24px)';
    }
styleIde.addEventListener("click",styleSelect);

back=() => {
    styleTapWrap.style.transform='translateY(-1px)';
    restoreBack.style.opacity='0';
    restoreBack.style.zIndex='4';
    restoreUp.style.zIndex='1';
    restoreUp.style.opacity=restoreDown.style.opacity='0';
    styleIde.style.opacity='1';
    styleIde.style.color='#fff';
    themeBtn1.style.transform='translateY(-2px)';
    themeBtn1.style.opacity=themeBtn2.style.opacity='0';
    styleTapWrap.style.zIndex='5';
}
restoreBack.addEventListener("click",back);

more=() => {
    restoreUp.style.opacity='1';
    restoreUp.style.zIndex='4';
    themeBtn1.style.opacity='0';
    themeBtn1.style.zIndex='-1';
    themeBtn2.style.zIndex='4';
    themeBtn2.style.opacity='1';
    themeBtn1.style.transform='translateY(15px)';
    themeBtn2.style.transform='translateY(-53px)';
    restoreDown.style.opacity='0';
    restoreDown.style.zIndex='1';
    }
restoreDown.addEventListener("click",more);

less=()=>{
    restoreUp.style.opacity='0';
    restoreUp.style.zIndex='1';
    themeBtn1.style.opacity='1';
    themeBtn2.style.opacity='0';
    themeBtn2.style.transform='translateY(1px)';
    themeBtn1.style.transform='translateY(-24px)';
    themeBtn1.style.zIndex='4';
    themeBtn2.style.zIndex='-1';
    restoreDown.style.opacity='1';
    restoreDown.style.zIndex='4';
}
restoreUp.addEventListener("click",less);


var darkTheme = document.getElementById('darkTheme'); 
var lightTheme = document.getElementById('lightTheme'); 
var steelTheme = document.getElementById('steel'); 
var blueTheme = document.getElementById('blue'); 
var duskTheme = document.getElementById('dusk'); 
var belleTheme = document.getElementById('belle');
var mast = document.getElementsByClassName("mastHead")[0];
 
function bG(n){
    mast.style.background=getComputedStyle(document.documentElement).getPropertyValue(n)
    return};

function hotshot(){
    for (var a = 0; a < qual.length; a++){
    qual[a].classList.remove('choice');}    
    }

dark =()=>{
hotshot();
setPref('dark');    
    darkTheme.classList.add('choice');
    bG('--mastHeadDark');
}
darkTheme.addEventListener("click",dark);

light =()=>{
hotshot();
setPref('light');   
    lightTheme.classList.add('choice');
    bG('--mastHeadLight');
}
lightTheme.addEventListener("click",light);

steel =()=>{
hotshot();
setPref('steel');
    steelTheme.classList.add('choice');
    bG('--mastHeadClone');
}
steelTheme.addEventListener("click",steel);

blue =()=>{
hotshot();
setPref('navy');
    blueTheme.classList.add('choice');
    bG('--mastHeadNavy');
}
blueTheme.addEventListener("click",blue);

dusk =()=>{
hotshot();
setPref('dusk');    
    duskTheme.classList.add('choice');
    bG('--mastHeadDusk');
}
duskTheme.addEventListener("click",dusk);

belle =()=>{
hotshot();
setPref('bella');    
    belleTheme.classList.add('choice');
    bG('--mastHeadBelle');
}
belleTheme.addEventListener("click",belle);

var homey = document.querySelector('.homeKey');
function aboutToHome(){
    window.location.replace("../index.html")
}
homey.onclick =()=> aboutToHome();