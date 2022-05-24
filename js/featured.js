var cardDeck = document.getElementsByClassName('cardDeck')[0];
var allCards = document.getElementsByClassName('ESCfeatures');
var cardstack = document.getElementsByClassName('cardstack')[0];
    
    function enableEsc(){
        for(var i=0; i < allCards.length; i++){
            allCards[i].classList.add('vraisVis');
            allCards[i].style.opacity='1';
            allCards[i].style.transform="translateY(3rem)";
        }
    }
    
calico=(n)=>{
    var hanged = document.getElementsByClassName('sway');
    hanged[n].onclick =()=>{
        for(var i=0; i < allCards.length; i++)
        {
        allCards[i].classList.add('vraisVis');
        allCards[i].style.transform="translateY(4rem)";
        }
        popped=()=>{
            allCards[n].style.transform='translateY(-6rem)';
        }
        setTimeout(popped,860);
        }
}
bonnie=()=>{
    for (var jack=0; jack<allCards.length; jack++){
    calico(jack);
    }}
bonnie();