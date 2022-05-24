oldState =() => localStorage.setItem('playState','true');
setTimeout(oldState,9972);

    var styleIde = document.querySelector("#styleTap");
    var styleTapWrap = document.querySelector('.styleTapWrap');
    var endSecure = document.querySelector(".tailEndSecure");
    var restoreBack = document.querySelector('#restoreBack');
    var restoreUp = document.querySelector('#restoreUp');
    var restoreDown = document.querySelector('#restoreDown');
    var themeBtn1 = document.querySelector('.themeButtons');
    var themeBtn2 = document.querySelector('.themeButtons2');
    var qual = document.getElementsByClassName('Qual');
    var descriptor = document.querySelector('.descriptor');
    var descOne = document.querySelector('.descript_1');
    var descTwo = document.querySelector('.descript_2');
    var sidebell = document.getElementsByClassName('sidebell')[0];
    var tbrb = document.getElementById('TBRB');
    var tbgb = document.getElementById('TBGB');
    var reset = document.getElementById('yR');
    var listClear = document.getElementById('yLR');
    var cancel = document.getElementById('nR');
    var cancelB = document.getElementById('nLR');
    var cape = document.querySelector('.cape');
    var dialogOne = document.getElementsByClassName('dialog')[0];
    var dialogTwo = document.getElementsByClassName('dialog')[1];

descriptorActive = ()=>{
    descriptor.style.transition='0.9s';
    descriptor.style.transform='translateX(8rem)';
}
descriptorPassive = ()=>{
    descriptor.style.transition='1.2s';
    descriptor.style.transform='translateX(-7rem)';
}
descOneActive =() =>{
    window.location.replace("./pages/about.html");
}
descTwoActive =()=>{
    window.location.replace("./pages/credits.html");
}
descOne.addEventListener('click',descOneActive);
descTwo.addEventListener('click',descTwoActive);
bellActive = () =>{
    sidebell.style.transition="1.5s";
    sidebell.style.opacity='1';
    sidebell.style.zIndex="7"
}
bellPassive =()=>{
    sidebell.style.transition='1.5s'
    sidebell.style.opacity='0';
    sidebell.style.zIndex="-9";
}

styleAlign =()=>{
    styleIde.style.marginLeft="0";
    styleIde.style.opacity="1";
}

styleReadyState =()=> endSecure.style.zIndex="1";

setLink=()=> localStorage.setItem('setLink','set');

clearLink=()=> {
    localStorage.setItem('setLink','unset');
    localStorage.setItem('tour','true');
    location.reload();
}

setPref =(a)=> {
    localStorage.setItem('setPreference','set'); 
    localStorage.setItem('ambience',a); 
    return
}
clearPref =()=> {
    localStorage.setItem('setPreference','unset'); 
    localStorage.setItem('playState','false');
    localStorage.setItem('tour','true');
    location.reload();
}

dialogBoxA=()=> dialogOne.classList.add('diagActive');
dialogBoxB=()=> dialogTwo.classList.add('diagActive');
dialogCancel=()=> {dialogOne.classList.remove('diagActive');dialogTwo.classList.remove('diagActive');}

tbrb.addEventListener("click",dialogBoxA);
tbgb.addEventListener("click",dialogBoxB);
reset.addEventListener("click",clearPref);
listClear.addEventListener("click",clearLink);
cancel.addEventListener("click",dialogCancel);
cancelB.addEventListener("click",dialogCancel);

if (localStorage.getItem("playState")=="true"){
    document.querySelector("#mPane").classList.add("playRun");
    document.querySelector("hr").classList.add("playRun");
    document.querySelector(".raiser").classList.remove("act1");
    document.querySelector(".raiser").classList.add("act1a");
    document.querySelector(".raiser2").classList.remove("act2");
    document.querySelector(".raiser2").classList.add("act2a");
    document.getElementById("quiClixBox1").classList.remove("An");
    document.getElementById("quiClixBox1").classList.add("Alt");
    setTimeout(styleAlign, 991);
    setTimeout(styleReadyState, 1020);
}
else{
    console.log('running');
    setTimeout(styleAlign, 10987);
    setTimeout(styleReadyState, 13316);
}
    var vita = document.getElementsByClassName('vita');    
    var titleCard = document.getElementById("titleCard");
    titleCard.innerHTML="The Mellow Theme";
    titleCard.style.color=vita[1].style.color="whitesmoke";
    vita[0].style.color="yellow";
    
    var revPlate = document.querySelector('.in_next');

    rideOn=()=>{
        sheen.style.display=ballBoy.style.display=ballGirl.style.display=mad.style.display=tour.style.display='none';
        tourOver.innerHTML='Reading List';
        tourOver.style.marginLeft='50%';
        tourOver.style.marginTop='3%';
    }
    offMic=()=>{
        console.log('mic is off');
    }
window.onload = function(){
    function joyride(){
        var comrade = localStorage.getItem('tour');
        switch (comrade){
            case "false":
                rideOn();
            break;
            case "true":
                offMic();
            break;
            default: console.log('vawulence!')
            }
        }
    joyride();
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
        }
    }

btnPax=(n)=>themeBtn1.style.opacity=restoreBack.style.opacity=restoreDown.style.opacity=restoreUp.style.opacity=n;
stylPax=(n)=>styleIde.style.opacity=n;
stlZed=(n)=>styleTapWrap.style.zIndex=n;
btnUp2Pax=(n)=>themeBtn2.style.opacity=restoreUp.style.opacity=n;
btnDown1Pax=(n)=>restoreDown.style.opacity=themeBtn1.style.opacity=n;
btnDown1Zed=(n)=>restoreDown.style.zIndex=themeBtn1.style.zIndex=n;
btnUp2Zed=(n)=>restoreUp.style.zIndex=themeBtn2.style.zIndex=n;

function stlTransform(){
    styleTapWrap.style.transform='translateY(40px)';
    themeBtn1.style.transform='translateY(-24px)';
}
function bckTransform(){
    themeBtn1.style.transform='translateY(-2px)';
    styleTapWrap.style.transform='translateY(-1px)';
}
function mreTransform(){
    themeBtn1.style.transform='translateY(15px)';
    themeBtn2.style.transform='translateY(-53px)';
}
function lssTransform(){
    themeBtn1.style.transform='translateY(-24px)';
    themeBtn2.style.transform='translateY(1px)';
}
function bckFx(){
    themeBtn2.style.opacity='0';
    restoreBack.style.zIndex='4';
    restoreUp.style.zIndex='1';
}
function mreFx(){
    themeBtn1.style.zIndex='-1';
    restoreDown.style.zIndex='1';
}
function stlFx(){
    restoreBack.style.zIndex='6';
    themeBtn2.style.zIndex='-9';
}

styleSelect=()=>{
    btnPax(1);
    stylPax(0);
    btnDown1Zed(4);
    stlZed(2);
    stlFx();
    stlTransform();
}
styleIde.addEventListener("click",styleSelect);
    
back=() => {
    btnPax(0);
    stylPax(1);
    stlZed(5);
    bckFx();
    bckTransform();
}
restoreBack.addEventListener("click",back);

more=() => {
    btnUp2Pax(1);
    btnDown1Pax(0);
    btnUp2Zed(4);
    mreFx();
    mreTransform();
}
restoreDown.addEventListener("click",more);

less=()=>{
    btnUp2Pax(0);
    btnDown1Pax(1);
    btnDown1Zed(4);
    restoreUp.style.zIndex='1';
    themeBtn2.style.zIndex='-1';
    lssTransform();
}
restoreUp.addEventListener("click",less);

var darkTheme = document.getElementById('darkTheme'); 
var lightTheme = document.getElementById('lightTheme'); 
var steelTheme = document.getElementById('steel'); 
var blueTheme = document.getElementById('blue'); 
var duskTheme = document.getElementById('dusk'); 
var belleTheme = document.getElementById('belle');
var sur = document.getElementsByClassName("surHead")[0];
var surSt= document.getElementsByClassName('surSt')[0]; 
var surDsk= document.getElementsByClassName('surDsk')[0]; 

function bG(n){
    sur.style.background=getComputedStyle(document.documentElement).getPropertyValue(n)
    return};

function hotshot(){
    for (var a = 0; a < qual.length; a++){
    qual[a].classList.remove('choice');}    
    }

Card=(a)=>{
    titleCard.style.color=getComputedStyle(document.documentElement).getPropertyValue(a);
    return
}
Plate=(b)=>{
    revPlate.style.background=getComputedStyle(document.documentElement).getPropertyValue(b);
    return
}

    var side = document.querySelector('.sidebar');
    var sideContent = document.querySelector('.sideContentUl');
    var textTone = document.getElementById('topicLi');
    var vist = document.getElementsByClassName('vita')[0];
    var vet = document.getElementsByClassName('vita')[1];
    var iota = document.getElementsByClassName('autresLi');
    var zeta = document.getElementById('premLi');
    var btn = document.getElementById('quiClix');
    var quicText = document.getElementById('it');
    
    Bar=(c)=>{
        side.style.background=getComputedStyle(document.documentElement).getPropertyValue(c);
        return
        }
side.classList.add('vraisVis');
    quiTab=(e)=>{
        btn.style.color=getComputedStyle(document.documentElement).getPropertyValue(e);
        return 
    }
sideContent.style.transition='1s';
    vitaStyle=(f)=>{
        vist.style.color=getComputedStyle(document.documentElement).getPropertyValue(f);
        vet.style.color=getComputedStyle(document.documentElement).getPropertyValue(f);
        return
    }
BarHead=(d)=>{
        textTone.style.background=getComputedStyle(document.documentElement).getPropertyValue(d);
        return
    }
BarStops=(d)=>{
    iota.style.background=getComputedStyle(document.documentElement).getPropertyValue(d);
    return
    }
BarPick=(d)=>{
    zeta.style.color=getComputedStyle(document.documentElement).getPropertyValue(d);
    return
}
dark =()=>{
    hotshot();
    setPref('dark');
    Card('--one'); Plate('--one');    
    darkTheme.classList.add('choice');
    bG('--surHeadDark');
    Bar('--forest');
    BarHead('--forest');
    BarPick('--one');
    quiTab('--three');
    vitaStyle('--one');
    vita[0].style.color="yellow";
}
dark();
darkTheme.addEventListener("click",dark);
light =()=>{
    hotshot();
    setPref('light');
    Card('--two'); Plate('--two');   
    lightTheme.classList.add('choice');
    bG('--surHeadLight');
    Bar('--illumin');
    BarHead('--illumin');
    BarPick('--two');
    quiTab("--four");
    vitaStyle('--two');
}
lightTheme.addEventListener("click",light);

steel =()=>{
    hotshot();
    setPref('steel');
    steelTheme.classList.add('choice');
    bG('--surHeadClone');
    Bar('--aether');
    BarHead('--aether');
    BarPick('--one');
    quiTab('--one');
    vitaStyle('--illumin');
}
steelTheme.addEventListener("click",steel);

blue =()=>{
    hotshot();
    setPref('navy');
    Card('--three'); Plate('--three');    
    blueTheme.classList.add('choice');
    bG('--surHeadNavy');
    Bar('--sea');
    BarHead('--sea');
    BarPick('--one');
    quiTab('--three');
    vitaStyle('--three');
}
blueTheme.addEventListener("click",blue);

dusk =()=>{
    hotshot();
    setPref('dusk');
    Card('--two'); Plate('--two');    
    duskTheme.classList.add('choice');
    bG('--surHeadMeadow');
    Bar('--four');
    BarHead('--four');
    BarPick('--one');
    quiTab('--forest');
    vitaStyle('--one');
}
duskTheme.addEventListener("click",dusk);

belle =()=>{
    hotshot();
    setPref('bella');
    Card('--two'); Plate('--two');    
    belleTheme.classList.add('choice');
    bG('--surHeadBelle');
    Bar('--two');
    BarHead('--two');
    BarPick('--donna');
    quiTab('--four');
    vitaStyle('--four');
}
belleTheme.addEventListener("click",belle);

// the Clix button concerns
function prep(){
    descriptor.style.opacity="1";
    btn.classList.add('theKnobA');
    function openBar(){
        descriptorActive();
        bellActive();
        localStorage.setItem("barOpen","true");
        side.style.width="45vw";
        sideContent.style.display="block";
        quicText.style.display='none';
    }
    function closeBar(){
        bellPassive();
        descriptorPassive();
        localStorage.setItem("barOpen","false");
        side.style.width="0";
        sideContent.style.display = quicText.style.display='none';
    }
    openBar();
    btn.onclick = function step2(){
        btn.classList.remove('theKnobA');
        btn.classList.add('theKnobB');
        closeBar();
        btn.onclick = function step3(){
            btn.classList.add('theKnobC');
            btn.classList.remove('theKnobB');
            openBar();
            btn.onclick = function step4(){
                btn.classList.toggle('theKnobC');
                if (localStorage.getItem("barOpen")=="true"){
                    closeBar();
                    btn.classList.add('theKnobD');
                }
                else{
                    openBar();
                    btn.classList.remove('theKnobD');
                }
            }//end of step 4 
        }//end of step 3
    }//end of step 2
}//end of prep

/*script for tutorial*/
    var tour = document.getElementById('visitor');
    var tourOver = document.getElementById('veteran');
    var tutorialSlide = document.getElementById('tutor');
    var tutorial = document.getElementById('tutorial');
    var sheen = document.querySelector('#sheen');
    var mad = document.querySelector('#werey');

    var ballBoy = document.getElementsByClassName('ballframe')[0];
    var ballGirl = document.getElementsByClassName('ballframe')[1];
    var outBall = document.querySelector('.cirque');
    tutorialActive=()=> {
        tutorialSlide.classList.add('bubbleActive');
        tutorial.classList.add('textTut');
        mad.classList.add('arha');
        sheen.style.zIndex='8';
        sheen.style.opacity='0.5';
        tutorial.innerHTML='The QuiClix button opens the customisable sidebar...';
    }
    tour.addEventListener('click',tutorialActive);
/*one*/ mad.onclick =()=>{
        tutorial.innerHTML="You can have your favorite pages appear in the sidebar links by clicking the associated icon beside the title of the visited page!";
        tutorial.style.fontSize="0.7rem";
/*two*/     mad.onclick =()=>{
                mad.classList.add('nxSlide');
                tutorial.style.fontSize="1rem";
                tutorial.innerHTML="The StyleTap button brings out a list of color schemes you can choose from...";
                tutorialSlide.classList.remove('bubbleActive');
                tutorialSlide.classList.add('tut2');
                tutorial.classList.add('tut2p');
/*three*/       mad.onclick=()=>{
                    mad.classList.remove('nxSlide');
                    tutorialSlide.classList.remove('tut2');
                    tutorial.classList.remove('tut2p');
                    mad.style.transition='0.5s';
                    mad.style.letterSpacing='1px';
                    mad.style.transform='translate(-62vw, 114vw)';
                    ballBoy.style.transition='1.5s';
                    ballGirl.style.opacity=ballBoy.style.opacity='1';
                    const mood = document.createElement('p');
                    mood.innerHTML="It all depends on your mood, really...";
                    mood.style.color='#fff';
                    mood.style.fontSize='1.5rem';
                    ballBoy.appendChild(mood);
                    ballBoy.style.fontSize='1.2rem';
                    ballBoy.style.fontWeight='900';
                    ballBoy.style.color='#000';
                    ballBoy.style.zIndex=ballGirl.style.zIndex='9';
                    outBall.classList.add('cirquePetite');
/*four*/            mad.onclick=()=> {
                        // mad.style.transform='translate(-40vw, 114vw)';
                        cape.style.zIndex='50';
                        madCap=()=>mad.innerHTML='Light...';
                        setTimeout(madCap,1400);
                        supes=()=>cape.style.zIndex='-99';
                        putt=()=>{
                            mad.style.transform='translate(-5vw, 114vw)';
                            mad.style.fontSize='0.7rem';
                            mad.innerHTML='...Corner Pocket';
                        }
                        setTimeout(putt,1914);
                        setTimeout(supes,2021);
                        sendBall.style.opacity="0";
                        sendBall.style.transition="1s";
                        base.classList.remove('noVis');
                        fly.classList.remove('noVis');
                        base.classList.add('mod');
                        fly.classList.add('theAnimBall');
                        slide1.classList.add('mov1');
                        slide2.classList.add('mov2');
                        slide3.classList.add('mov3');
                        slide4.classList.add('mov4');
                        slide5.classList.add('mov5');
                        ballBoy.removeChild(mood);
                        ballBoy.style.fontSize='1rem';
/*five*/            mad.onclick=()=>{
                        safety=(n)=>{
                            sessionStorage.setItem('safetyState',n);
                            stay=()=>{
                                mad.style.display='none';
                            }
                            corona=()=>{
                                mad.style.display='block';
                            }
                            var a = sessionStorage.getItem('safetyState');
                            switch (a) {
                                case 'on':
                                    stay();
                                    break;
                                case 'off':
                                    corona();
                                    default:
                                        console.log('stay safe!');
                                    break;
                            }
                            return
                        }
                            
                        /*yeah, bruuu... i'm quite aware the ultimate aim of this snippet could be implemented in LITERALLY just 2 lines, loooooL! i figured i'd brush up on my switch casing, so yeah :D ...plus i need to refresh my memory on this project as a whole, given that i first started this script quite a while back. (I'm refactoring the entire code some two weeks after the fact) ...And then of course considering that your homie Stava has always been a tad OCD, so... ;) 
                        */
                            for (let a = 0; a < teeth.length; a++) {
                                teeth[a].style.transition='1s';
                                teeth[a].style.opacity='0';}
                                
                                //line one: mad.style.display='none';
                                safety('on');
                                slide1.style.transition='2s';
                                slide1.style.transform='translateY(120px)'
                                slide2.style.transition='1s';
                                slide2.style.transform='translateY(90px)'
                                slide3.style.transition='0.5s';
                                slide3.style.transform='translateY(30px)';
                                slide5.style.transform='translateY(10px)';
                                fly.classList.remove('theAnimBall');
                                fly.classList.add('mov5');
                                fly.style.transition='0.3s';
                                a=()=>fly.style.transform='translate(60px,70px)';
                                setTimeout(a,3000);
                                b=()=>fly.style.display='none';
                                setTimeout(b,3200);
                                scatter=()=>{
                                    slide1.style.transition='0.6s';
                                    slide1.style.transform="translate(-95px,-25px)";
                                    slide1.style.width="100%";
                                    slide1.style.height="100%";
                                    slide1.style.zIndex="30";
                                    slide1.classList.remove('light');
                                    slide1.style.background="#ffd900";
                                    tone=()=>slide1.style.background="greenyellow";
                                    DC=()=>{
                                        ballGirl.innerHTML="Discover more features as you go along. That's all for now!";
                                        ballGirl.style.marginTop="3rem";
                                        ballGirl.style.display='none';}
                                        setTimeout(tone,600);
                                    setTimeout(DC,853);
                                    slide2.style.transform='translate(60px,-60px)';
                                    slide3.style.transform='translate(-130px,-130px)';
                                    slide5.style.transform='translateX(-90px)';
                                    slide4.style.transform='translateX(90px)';
                                    OneMillion=()=>{ballGirl.style.marginTop="5rem";
                                        ballGirl.style.marginLeft="0.5rem";
                                        ballGirl.style.fontSize='0.89rem';
                                        ballGirl.style.display="block";    
                                        ballGirl.style.transition="3s"
                                    }
                                    setTimeout(OneMillion,1200);
                                }
                                setTimeout(scatter,3200);
                                function gone(){
                                    //line two: mad.style.display='block'; Oya, chop kiss ;-*
                                    udeme=()=>{
                                        safety('off');
                                        mad.style.transform='translate(-42vw, 114vw)';
                                        mad.style.transition='0.8s';
                                        mad.style.paddingLeft= '1.3rem';
                                        mad.style.paddingRight= '1.3rem';
                                    }
                                    setTimeout(udeme, 1759);
                                    mad.innerHTML="Begin!";
                                    slides = [slide2, slide3, slide4, slide5];
                                    function weee(n){
                                        slides[n].style.visibility='hidden';
                                        slides[n].style.zIndex='-999';
                                        slides[n].style.width="2%";
                                        slides[n].style.height="2%";
                                        return;}
                                        weee(0);weee(1);weee(2);weee(3);
                                    }
                                    setTimeout(gone,3180);
/*six*/                                 mad.onclick=()=>{
                                        slide1.style.transform='scale(7)';
                                        mad.style.display='none';
                                        ballGirl.style.zIndex='-99';
                                        noSass=()=>{
                                            sheen.style.display=ballBoy.style.display=ballGirl.style.display=mad.style.display=tour.style.display='none';
                                            tourOver.innerHTML='Reading List';
                                            tourOver.style.marginLeft='50%';
                                            localStorage.setItem('tour','false');
                                        }
                                        setTimeout(noSass, 500);
                                    }
                                }
                            }
                        }
                    }
                }
tourOver.onclick=()=>{
    localStorage.setItem('tour','false');
    window.location.assign('./pages/ReadingList.html');
}
                var slide1 = document.querySelector('#slideballOne');
                var slide2 = document.querySelector('#slideballTwo');
                var slide3 = document.querySelector('#slideballThree');
                var slide4 = document.querySelector('#slideballFour');
                var slide5 = document.querySelector('#slideballFive');
                var fly = document.querySelector('#flyball');
                var base = document.querySelector('#baseball');
                var sendBall = document.getElementsByClassName('Ball')[0];
                var actif = document.getElementsByClassName('activate')[0];
                var tweak = document.getElementsByClassName('tweaks')[0];
                var teeth = document.getElementsByClassName('dent');