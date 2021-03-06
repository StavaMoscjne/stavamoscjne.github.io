setPref =(a)=> {
    localStorage.setItem('setPreference','set'); 
    localStorage.setItem('ambience',a); 
    return
}
var forceSelect = document.getElementsByClassName('themeSettingsNotifier')[0];
var blockSelect = document.getElementsByClassName('themeNone')[0];

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
            forceSelect.style.display=blockSelect.style.display='block';
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
var kree = document.getElementById('mainPg');
var descHome = document.querySelector(".descript_home");
var hPick = document.querySelector(".descript_home p");
side.classList.add('vraisVisE');
sideContent.style.transition='1s';

function bG(n){
    sur.style.background=getComputedStyle(document.documentElement).getPropertyValue(n)
    return};

Bar=(c)=>{
        side.style.background=getComputedStyle(document.documentElement).getPropertyValue(c);
        return
        }
bodyText=(c)=>{
        kree.style.color=getComputedStyle(document.documentElement).getPropertyValue(c);
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
HomeStop=(d)=>{
        descHome.style.background=getComputedStyle(document.documentElement).getPropertyValue(d);
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
HomePick=(h)=>{
    hPick.style.color=getComputedStyle(document.documentElement).getPropertyValue(h);
    return;
}
dark =()=>{
    setPref('dark');
    bG('--surHeadDark');
    Bar('--forest');
    HomeStop('--forest');
    BarHead('--forest');
    BarPick('--one');
    HomePick('--one');
    quiTab('--three');
    bodyText('--one');
}

light =()=>{
    setPref('light');
    bG('--surHeadLight');
    Bar('--illumin');
    HomeStop('--illumin');
    BarHead('--illumin');
    BarPick('--two');
    HomePick('--two');
    quiTab("--four");
    bodyText('--two');
}

steel =()=>{
    setPref('steel');
    bG('--surHeadClone');
    Bar('--aether');
    HomeStop('--aether');
    BarHead('--aether');
    BarPick('--one');
    HomePick('--one');
    quiTab('--one');
    bodyText('--illumin');
}

blue =()=>{
    setPref('navy');
    bG('--surHeadNavy');
    Bar('--sea');
    HomeStop('--sea');
    BarHead('--sea');
    BarPick('--one');
    HomePick('--one');
    quiTab('--three');
    bodyText('--illumin');
}

dusk =()=>{
    setPref('dusk');
    bG('--surHeadMeadow');
    Bar('--four');
    HomeStop('--four');
    BarHead('--four');
    BarPick('--one');
    HomePick('--one');
    quiTab('--forest');
    bodyText('--illumin');
}

belle =()=>{
    setPref('bella');
    bG('--surHeadBelle');
    Bar('--two');
    HomeStop('--two');
    BarHead('--two');
    BarPick('--donna');
    HomePick('--donna');
    quiTab('--four');
    bodyText('--four');
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

//home about and credits
var abou = document.querySelector('.descript_1');
var cred = document.querySelector('.descript_2');
function home(){window.location.replace("../index.html")};
function about(){window.location.replace("./about.html")};
function credits(){window.location.replace("./credits.html")};
descHome.addEventListener('click',home);
abou.addEventListener('click',about);
cred.addEventListener('click',credits);

//username concerns
var fixed = localStorage.getItem('userN');
function fixName(){
    var userFixed = JSON.parse(localStorage.getItem('user'));
    switch (fixed) {
        case 'set':
            zeta.innerHTML="It's "+ userFixed +"'s Favourite Pages<i>!</i>";
            break;
        default:
            console.log('userName.value');
            break;
    }
}
fixName();
//end of username concerns