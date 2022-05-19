oldState =() => localStorage.setItem('playState','true');
setTimeout(oldState,9972);

if (localStorage.getItem("playState")=="true"){
    document.querySelector("#mPane").classList.add("playRun");
    document.querySelector("hr").classList.add("playRun");
    document.querySelector(".raiserVW").classList.remove("act1");
    document.querySelector(".raiserVW").classList.add("act1a");
    document.querySelector(".raiser2VW").classList.remove("act2");
    document.querySelector(".raiser2VW").classList.add("act2a");
}
else{
    console.log('running');
}

// newState=()=> {localStorage.setItem('playState','false'); location.reload();}
// var ben = document.querySelector('#resetsVista');
// ben.addEventListener('click',newState);

styleReadyStateVW = () => {endSecureVW.style.zIndex="1"};
    var styleIdeVW = document.querySelector("#styleTapVW");
    var styleTapWrapVW = document.querySelector('.styleTapWrapVW');
    var endSecureVW = document.querySelector(".tailEndSecureVW");
    var restoreBackVW = document.querySelector('#restoreBackVW');
    var restoreUpVW = document.querySelector('#restoreUpVW');
    var restoreDownVW = document.querySelector('#restoreDownVW');
    var themeBtn1VW = document.querySelector('.themeButtonsVW');
    var themeBtn2VW = document.querySelector('.themeButtons2VW');
    var qual = document.getElementsByClassName('Qual');

setPref = (a) => {localStorage.setItem('setPreference','set'); localStorage.setItem('ambience',a); return}

window.onload = function(){
            if(localStorage.getItem("setPreference")=="set"){
            themeBtn2VW.style.zIndex="-9";
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

styleSelectVW=()=>{
    styleReadyStateVW();
    btnPax(1);
    stylPax(0);
    btnDown1Zed(4);
    stlZed(2);
    stlFx();
    stlTransform();
    }
styleIdeVW.addEventListener("click",styleSelectVW);

backVW=() => {
    btnPax(0);
    stylPax(1);
    stlZed(5);
    bckFx();
    bckTransform();
}
restoreBackVW.addEventListener("click",backVW);

moreVW=() => {
    btnUp2Pax(1);
    btnDown1Pax(0);
    btnUp2Zed(4);
    mreFx();
    mreTransform();
    }
restoreDownVW.addEventListener("click",moreVW);

lessVW=()=>{
    btnUp2Pax(0);
    btnDown1Pax(1);
    btnDown1Zed(4);
    restoreUpVW.style.zIndex='1';
    themeBtn2VW.style.zIndex='-1';
    lssTransform();
}
restoreUpVW.addEventListener("click",lessVW);

var darkThemeVW = document.getElementById('darkThemeVW'); 
var lightThemeVW = document.getElementById('lightThemeVW'); 
var steelThemeVW = document.getElementById('steelVW'); 
var blueThemeVW = document.getElementById('blueVW'); 
var duskThemeVW = document.getElementById('duskVW'); 
var belleThemeVW = document.getElementById('belleVW');
var surVW = document.getElementsByClassName("surHeadVW")[0];

function bG(n){
    surVW.style.background=getComputedStyle(document.documentElement).getPropertyValue(n)
    return};

function hotshot(){
    for (var a = 0; a < qual.length; a++){
    qual[a].classList.remove('choice');}    
    }

dark =()=>{
hotshot();
setPref('dark');    
    darkThemeVW.classList.add('choice');
    bG('--surHeadDark');
}
darkThemeVW.addEventListener("click",dark);

light =()=>{
hotshot();
setPref('light');   
    lightThemeVW.classList.add('choice');
    bG('--surHeadLight');
}
lightThemeVW.addEventListener("click",light);

steel =()=>{
hotshot();
setPref('steel');
    steelThemeVW.classList.add('choice');
    bG('--surHeadClone');
}
steelThemeVW.addEventListener("click",steel);

blue =()=>{
hotshot();
setPref('navy');
    blueThemeVW.classList.add('choice');
    bG('--surHeadNavy');
}
blueThemeVW.addEventListener("click",blue);

dusk =()=>{
hotshot();
setPref('dusk');    
    duskThemeVW.classList.add('choice');
    bG('--surHeadMeadow');
}
duskThemeVW.addEventListener("click",dusk);

belle =()=>{
hotshot();
setPref('bella');    
    belleThemeVW.classList.add('choice');
    bG('--surHeadBelle');
}
belleThemeVW.addEventListener("click",belle);

// definitions
btnPax=(n)=>themeBtn1VW.style.opacity=restoreBackVW.style.opacity=restoreDownVW.style.opacity=restoreUpVW.style.opacity=n;
stylPax=(n)=>styleIdeVW.style.opacity=n;
stlZed=(n)=>styleTapWrapVW.style.zIndex=n;
btnUp2Pax=(n)=>themeBtn2VW.style.opacity=restoreUpVW.style.opacity=n;
btnDown1Pax=(n)=>restoreDownVW.style.opacity=themeBtn1VW.style.opacity=n;
btnDown1Zed=(n)=>restoreDownVW.style.zIndex=themeBtn1VW.style.zIndex=n;
btnUp2Zed=(n)=>restoreUpVW.style.zIndex=themeBtn2VW.style.zIndex=n;

function stlTransform(){
    styleTapWrapVW.style.transform='translateY(40px)';
    themeBtn1VW.style.transform='translateY(-24px)';
}
function bckTransform(){
    themeBtn1VW.style.transform='translateY(-2px)';
    styleTapWrapVW.style.transform='translateY(-1px)';
}
function mreTransform(){
    themeBtn1VW.style.transform='translateY(15px)';
    themeBtn2VW.style.transform='translateY(-53px)';
}
function lssTransform(){
    themeBtn1VW.style.transform='translateY(-24px)';
    themeBtn2VW.style.transform='translateY(1px)';
}
function bckFx(){
    themeBtn2VW.style.opacity='0';
    restoreBackVW.style.zIndex='4';
    restoreUpVW.style.zIndex='1';
}
function mreFx(){
    themeBtn1VW.style.zIndex='-1';
    restoreDownVW.style.zIndex='1';
}
function stlFx(){
    restoreBackVW.style.zIndex='6';
    themeBtn2VW.style.zIndex='-9';
}

//
var themePanel = document.getElementsByClassName("themePanel")[0];
var menuVista = document.getElementById('menuVista');
var resetsVista = document.getElementById('resetsVista');
var foldMenu = document.getElementsByClassName('foldMenuScale')[0];
var foldMenuTwo = document.getElementsByClassName('foldMenu')[0];
var foldMenuResets = document.getElementsByClassName('foldMenu')[1];
var menuPanel = document.getElementsByClassName('menuPanel')[0];
var resetsPanel = document.getElementsByClassName('resetsPanel')[0];
var styleVista = document.getElementById('styleVista');

// vistaOne=()=>{
//     themePanel.style.display='block';
//     styleVista.style.opacity='0';

//     resetsPanel.style.left="18.7rem";
//     resetsPanel.style.opacity="0";

//     popOn=()=>{
//     themePanel.style.left='14.7vw';
//     themePanel.style.opacity='1';
//     themePanel.style.transition='1s';
//     }
//     setTimeout(popOn,50);
//     menuVista.style.transition='1s';
//     resetsVista.style.transition='1s';
//     themePanel.style.background='#c0c0c038';
//     menuVista.style.top='31.2vw';
//     resetsVista.style.top='35.2vw';
// }
// vistaOneFold=()=>{
//     styleVista.style.opacity='1';
    
//     resetsPanel.style.left="18.7rem";
    
//     themePanel.style.left='35vw';
//     themePanel.style.opacity='0';
//     themePanel.style.background='#c0c0c038';
//     popOff=()=>themePanel.style.display='none';
//     setTimeout(popOff,1000);
//     menuVista.style.top='22.5vw';
//     resetsVista.style.top='27.45vw';
// }

// styleVista.addEventListener('click',vistaOne);
// foldMenu.addEventListener('click',vistaOneFold);

// vistaTwo=()=>{
//     menuVista.style.transform="translate";
//     menuPanel.style.display='block';
//     shadey=()=>menuVista.classList.remove('bigshot');
//     setTimeout(shadey,300);
//     menuVista.style.borderRadius='50%';
//     menuVista.style.transform='scale(0.8)';//shrink selection
//     popOn=()=>{
//     menuPanel.style.top='14.8rem';
//     menuPanel.style.opacity='1';
//     menuPanel.style.transition='0.7s';
//     }
//     setTimeout(popOn,50);
// }
// vistaTwoFold=()=>{
//     menuVista.style.borderRadius="25%";
//     menuPanel.style.top='22rem';
//     menuPanel.style.opacity='0';
//     menuVista.classList.add('bigshot');    
//     menuVista.style.borderRadius='25%';
//     menuVista.style.transform='scale(1)';
//     popOff=()=>menuPanel.style.display='none';
//     setTimeout(popOff,1000);
// }
// menuVista.addEventListener('click',vistaTwo);
// foldMenuTwo.addEventListener('click',vistaTwoFold);

// vistaThree=()=>{
//     resetsPanel.style.left='14.7rem';
//     resetsPanel.style.opacity='1';
// }
// vistaThreeFold=()=>{
//     resetsPanel.style.left='31.3rem';
// }
// resetsVista.addEventListener('click',vistaThree);
// foldMenuResets.addEventListener('click',vistaThreeFold);



var titleCard = document.querySelector('#titleCard');
titleCard.innerHTML='The Mellow Theme';