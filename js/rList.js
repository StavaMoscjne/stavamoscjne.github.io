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

var msgPanel = document.getElementsByClassName('theMsgPanel')[0];
var topDrawerPanel = document.getElementsByClassName('topDrawerPanel')[0];
var topDrawerPanel_A = document.getElementsByClassName('topDrawerPanel_A')[0];
var rRem = document.querySelector('.rRem');
var rTop = document.querySelector('.rTop');
var rOdd = document.querySelector('.rOdd');
var collect = document.querySelector('#collect');
var closeDrawer = document.querySelector('#closeDrawer');
var closeDrawer_A = document.querySelector('#closeDrawer_A');

var drawer =document.querySelector('.drawer');
var interests =document.querySelector('.interests');

var bann = document.querySelector('.subBannerLie');
var bann_A = document.querySelector('.subBannerLie_A');

var a =document.querySelector('.a');//gangster
a.addEventListener('click',function(){window.location.replace('./inProgress.html')});
var b =document.querySelector('.b');//wisdom
b.addEventListener('click',function(){window.location.replace('./inProgress.html')});
var c =document.querySelector('.c');//highFive
c.addEventListener('click',function(){window.location.replace('./inProgress.html')});
var d =document.querySelector('.d');//DIAR
d.addEventListener('click',function(){window.location.replace('./inProgress.html')});
var e =document.querySelector('.e');//tableShaker
e.addEventListener('click',function(){window.location.replace('./inProgress.html')});
var f =document.querySelector('.f');//awffsome
f.addEventListener('click',function(){window.location.replace('./inProgress.html')});
var g =document.querySelector('.g');
var tubG =document.querySelector('.ihaisi');

var swoon =document.querySelector('.swoon'); //Kart
swoon.addEventListener('click',function(){window.location.replace('./Karteikartchen.html')});
var sweft =document.querySelector('.sweft'); //Halfth
sweft.addEventListener('click',function(){window.location.replace('./inProgress.html')});
var swight =document.querySelector('.swight'); //Mlthe
swight.addEventListener('click',function(){window.location.replace('./inProgress.html')});
var swup =document.querySelector('.swup'); //Alay
swup.addEventListener('click',function(){window.location.replace('./inProgress.html')});

reminderOf =()=> msgPanel.classList.add('active');
rRem.addEventListener("click",reminderOf);
reminderDone =()=> msgPanel.classList.remove('active');
collect.addEventListener("click",reminderDone);
function drawerOpen (){topDrawerPanel.classList.add('drawerActive')};
function drawerOpen_A (){topDrawerPanel_A.classList.add('drawerActive_A')};

rTop.onclick = topList;
rOdd.addEventListener("click",oddList);
g.addEventListener("click",tubList);

//panel aura as background
    function tubList(){
        drawerOpen();
        topDrawerPanel.classList.add('topPanelAura');
        interests.style.display='none';
        tubG.style.display='block';
        g.onclick=removeEventListener('click',tubList);
        bann.innerHTML='I Have a Tub I Soak In';
    }

    function oddList(){
        drawerOpen();
        topDrawerPanel.classList.add('topPanelAura3');
        tubG.style.display='none';
        interests.style.display="block";
        bann.innerHTML='Miscellaneous Amusements';
    }
    function topList(){
        drawerOpen_A();
        topDrawerPanel_A.classList.add('topPanelAura2');
        bann_A.innerHTML='Top Drawer &#128076; ';
    }

drawerClosed =()=> {
    topDrawerPanel.classList.add('drawerPassive');
    reset=()=>{
        topDrawerPanel.classList.remove('drawerPassive');
        topDrawerPanel.classList.remove('drawerActive');
        topDrawerPanel.classList.remove('topPanelAura');
        topDrawerPanel.classList.remove('topPanelAura3');
    }
    setTimeout(reset, 1000);
}
drawerClosed_A =()=> {
    topDrawerPanel_A.classList.add('drawerPassive');
    reset_A=()=>{
        topDrawerPanel_A.classList.remove('drawerPassive');
        topDrawerPanel_A.classList.remove('drawerActive_A');
        topDrawerPanel_A.classList.remove('topPanelAura2');
    }
    setTimeout(reset_A, 1000);
}
closeDrawer.addEventListener("click",drawerClosed);
closeDrawer_A.addEventListener("click",drawerClosed_A);

//home about and credits
var hom = document.querySelector('.descript_home');
var abou = document.querySelector('.descript_1');
var cred = document.querySelector('.descript_2');
function home(){window.location.replace("../index.html")};
function about(){window.location.replace("./about.html")};
function credits(){window.location.replace("./credits.html")};
abou.addEventListener('click',about);
hom.addEventListener('click',home);
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