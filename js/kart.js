var main = document.querySelector('.kartMain');
var bottom1 = document.querySelector('.midkartBottom1');
var prev = document.querySelector('.knob1');
var next = document.querySelector('.knob2');
var cardBox = document.querySelector('.kartMiddle');
var count = document.querySelector('.counter');
var last = document.querySelector('.last');
var first = document.querySelector('.first');
var stet = document.querySelector('.diode');

prev.addEventListener('click',scrollPrevious);
next.addEventListener('click',scrollNext);

var n=1;
var x=6;
var a=280;
var b=1;

count.innerHTML= n+"/"+x;

function flipCountUp(){
    if(n>=1 && n<=x-1){
        n = n+1;
        cardBox.scrollTo(b*a, 0);
        count.innerHTML= n+"/"+x;
        b++;
    }
    else{
        console.log('max count reached');
    }
}
function flipCountDown(){
    if(n>1 && n<=x){
        b--; n--;
        cardBox.scrollBy(-1*a,0);
        count.innerHTML= n+"/"+x;
    }
    else{
        console.log('lowest count reached');
    }
}
function scrollNext(){
    flipCountUp();
}
function scrollPrevious(){
    flipCountDown();
    enableRestrict();
}

last.addEventListener('click',function(){
    for(z=0; z<x; z++){
        scrollNext();
    }
});
first.addEventListener('click',function(){
    cardBox.scrollBy(-x*a, 0);
    n=1; b=1;
    count.innerHTML= n+"/"+x;
});

function revealPage(){
    main.style.transition='3s';
    main.style.opacity="1";
}
setTimeout(revealPage, 300);

function enableRestrict (){
    stet.style.display = 'block'
    function trickleflow(){
        stet.style.display = 'none'
    }
    setTimeout(trickleflow, 1000);
}

var openerKnob = document.querySelector('.openerKnob');
var mantle = document.querySelector('.openerKnobMantle');
var controlBox = document.querySelector('.controlBox');
var controlFlap = document.querySelector('.kartBottom2');
var midB = document.querySelector('.midkartBottom1_B');
var midC = document.querySelector('.midkartBottom1_C');

function flapOpened (){
    var curtain = document.querySelector("#curtain");
    curtain.style.opacity='0.3';
    curtain.style.transition='1s';
    setTimeout(function(){curtain.style.display='none'},300);
    controlFlap.classList.add('activeBox');
    function enableControl(){
        controlBox.style.display='block';
        mantle.style.display='none';
    }
    setTimeout(enableControl, 419);
}
openerKnob.addEventListener('click',flapOpened)

let hint = document.querySelector('.hint');
hint.addEventListener('click',function(){
    midB.innerHTML='Mirror, Mirror...';
    midC.innerHTML='...On the wall';
})
//the time
const showTime = setInterval(theTimeWithSeconds, 1000);
function theTimeWithSeconds(){
var date = new Date(); 
bottom1.innerHTML = date.toLocaleTimeString()};