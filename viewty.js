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
var styleVista = document.getElementById('styleVista');
var menuVista = document.getElementById('menuVista');
var resetsVista = document.getElementById('resetsVista');
var themePanel = document.getElementsByClassName("themePanel")[0];
var menuPanel = document.getElementsByClassName('menuPanel')[0];
var resetsPanel = document.getElementsByClassName('resetsPanel')[0];
var foldMenuStyle = document.getElementsByClassName('foldMenuScale')[0];
var foldMenuResets = document.getElementsByClassName('foldMenu')[0];
var foldMenuBar = document.getElementsByClassName('foldMenu')[1];

styleVistaOne=()=>{
    pops=()=>styleVista.style.visibility='hidden';
    setTimeout(pops, 250);
    themePanel.style.zIndex='99';
    themePanel.style.opacity='1';
    themePanel.style.left='11.2rem';
}
styleVistaTwo=()=>{
    menuVista.style.top="12rem";
    resetsVista.style.top="16rem";
    menuVista.style.transition='0.4s';
    resetsVista.style.transition='0.2s';
}
foldStyleMenuOne=()=>{
    pops=()=>styleVista.style.visibility='visible';
    setTimeout(pops, 250);
    themePanel.style.zIndex='-99';
    themePanel.style.opacity='0';
    themePanel.style.left='28rem';
}
foldStyleMenuTwo=()=>{
    pops=()=>{
    menuVista.style.top="4.27rem";
    resetsVista.style.top="8.48rem";
    }
    menuVista.style.transition='0.3s';
    resetsVista.style.transition='0.5s';
    setTimeout(pops, 350);
}


resetsVistaNullifySelection=()=>{
    shadey=()=> {
        resetsVista.classList.remove('bigshot');
        resetsVista.classList.remove('rVista');
        resetsVista.classList.remove('vista');
        resetsVista.style.opacity='1';
        resetsVista.style.zIndex='99';
    }
    setTimeout(shadey,300);
    resetsVista.style.background='#ff0000';
    resetsVista.style.borderRadius='100%';
    resetsVista.style.transform='scale(0.8)' //shrink selection
}

resetsVistaValidateSelection=()=>{
    shadey=()=> {
        resetsVista.classList.add('rVista');
        resetsVista.classList.add('bigshot');
        resetsVista.style.opacity='1';
        resetsVista.style.zIndex='99';
    }
    setTimeout(shadey,300);
    resetsVista.style.background='#c0c0c038';
    resetsVista.style.borderRadius='1rem';
    resetsVista.style.transform='scale(1)';
    resetsVista.style.transition='0.8s';
}

menuVistaNullifySelection=()=>{
    shadey=()=> {
        menuVista.classList.remove('bigshot');
        menuVista.classList.remove('vista');
        menuVista.style.opacity='1';
        menuVista.style.zIndex='99';
    }
    setTimeout(shadey,300);
    menuVista.style.background='#ff9900';
    menuVista.style.borderRadius='100%';
    menuVista.style.transform='scale(0.8)' //shrink selection
}

menuVistaValidateSelection=()=>{
    shadey=()=> {
        menuVista.classList.add('bigshot');
        menuVista.style.opacity='1';
        menuVista.style.zIndex='99';
    }
    setTimeout(shadey,300);
    menuVista.style.background='#c0c0c038';
    menuVista.style.borderRadius='1rem';
    menuVista.style.transform='scale(1)';
    menuVista.style.transition='0.8s';
}

styleVistaTransform=()=>{
        styleVistaOne();
        styleVistaTwo();
    }
    
styleVistaFold=()=>{
        foldStyleMenuOne();
        foldStyleMenuTwo();
}
    
resetsVistaTransform=()=>{
    resetsPanel.style.top='4.5rem';
    resetsPanel.style.transition='1s';
    resetsPanel.style.zIndex='99';
    resetsPanel.style.opacity='1';
    pops=()=>resetsPanel.style.left='40rem';
    setTimeout(pops,850);
    resetsVistaNullifySelection();
}

resetsVistaFold=()=>{
    resetsPanel.style.left='30rem';
    resetsPanel.style.opacity='0';
    resetsPanel.style.transition='0.9s';
    pops=()=>resetsPanel.style.top='3rem';
    pops2=()=>resetsPanel.style.zIndex='-99';
    setTimeout(pops,800);
    setTimeout(pops2,700);
    resetsVistaValidateSelection();
}

menuVistaTransform=()=>{
    menuPanel.style.zIndex='99';
    menuPanel.style.opacity='1';
    menuPanel.style.left='52.6rem';
    menuPanel.style.transition='0.5s';
    menuVistaNullifySelection();
}

menuVistaFold=()=>{
    pops=()=>menuPanel.style.zIndex='-99';
    setTimeout(pops,650);
    menuPanel.style.opacity='0';
    menuPanel.style.left='45rem';
    menuPanel.style.transition='0.5s';
    menuVistaValidateSelection();
}

styleVista.addEventListener('click',styleVistaTransform);
foldMenuStyle.addEventListener('click',styleVistaFold);

resetsVista.addEventListener('click',resetsVistaTransform);
foldMenuResets.addEventListener('click',resetsVistaFold);

menuVista.addEventListener('click',menuVistaTransform);
foldMenuBar.addEventListener('click',menuVistaFold);

var titleCard = document.querySelector('#titleCard');
titleCard.innerHTML='The Mellow Theme';