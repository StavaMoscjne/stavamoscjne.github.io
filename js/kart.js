var main = document.querySelector('.kartMain');
var bottom1 = document.querySelector('.kartBottom1');
var prev = document.querySelector('.knob1');
var next = document.querySelector('.knob2');
var cardBox = document.querySelector('.kartMiddle');
var count = document.querySelector('.counter');
var last = document.querySelector('.last');
var first = document.querySelector('.first');

prev.addEventListener('click',scrollPrevious);
next.addEventListener('click',scrollNext);

var n=1;
var x=6;
var a=176;
var b=1;

count.innerHTML= n+"/"+x;

function flipCountUp(){
    if(n>=1 && n<=(x-1)){
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
        n--;
        cardBox.scrollBy(-1*a,0);
        count.innerHTML= n+"/"+x;
        b--;
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

function reveal(){
    main.style.transition='3s';
    main.style.opacity="1";
}
setTimeout(reveal, 300);