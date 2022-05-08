setPref =(a)=> {
    localStorage.setItem('setPreference','set'); 
    localStorage.setItem('ambience',a); 
    return
}

window.onload = function(){
    if(localStorage.getItem("setPreference")=="set"){
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

var sur = document.getElementsByClassName("surHead")[0];
var side = document.querySelector('.sidebar');
var sideContent = document.querySelector('.sideContentUl');
var textTone = document.getElementById('topicLi');
var iota = document.getElementsByClassName('autresLi');
var zeta = document.getElementById('premLi');
var btn = document.getElementById('quiClix');
var quicText = document.getElementById('it');

side.classList.add('vraisVis');
sideContent.style.transition='1s';

function bG(n){
    sur.style.background=getComputedStyle(document.documentElement).getPropertyValue(n)
    return};

Bar=(c)=>{
        side.style.background=getComputedStyle(document.documentElement).getPropertyValue(c);
        return
        }
quiTab=(e)=>{
        btn.style.color=getComputedStyle(document.documentElement).getPropertyValue(e);
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
    setPref('dark');
    bG('--surHeadDark');
    Bar('--forest');
    BarHead('--forest');
    BarPick('--one');
    quiTab('--three');
}

light =()=>{
    setPref('light');
    bG('--surHeadLight');
    Bar('--illumin');
    BarHead('--illumin');
    BarPick('--two');
    quiTab("--four");
}

steel =()=>{
    setPref('steel');
    bG('--surHeadClone');
    Bar('--aether');
    BarHead('--aether');
    BarPick('--one');
    quiTab('--one');
}

blue =()=>{
    setPref('navy');
    bG('--surHeadNavy');
    Bar('--sea');
    BarHead('--sea');
    BarPick('--one');
    quiTab('--three');
}

dusk =()=>{
    setPref('dusk');
    bG('--surHeadMeadow');
    Bar('--four');
    BarHead('--four');
    BarPick('--one');
    quiTab('--forest');
}

belle =()=>{
    setPref('bella');
    bG('--surHeadBelle');
    Bar('--two');
    BarHead('--two');
    BarPick('--donna');
    quiTab('--four');
}

function prep(){
    btn.classList.add('theKnobA');
    function openBar(){
        localStorage.setItem("barOpen","true");
        side.style.width="45vw";
        sideContent.style.display="block";
        quicText.style.display='none';
    }
    function closeBar(){
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
            } 
        }
    }
}