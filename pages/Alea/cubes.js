document.querySelector('.pitch').addEventListener('click', function(){
    document.querySelector('.cube').classList.remove('spin');
    document.querySelector('.cubeTwo').classList.remove('twill');
    document.querySelector('.cube').classList.add('throw');
    document.querySelector('.cubeTwo').classList.add('throwTwo');
    this.style.display='none';
    document.querySelector('.flapboard1').classList.add("raiseFlap");
    document.querySelector('.flapboard2').classList.add("raiseFlap2");
    document.querySelector('.flapboard3').classList.add("raiseFlap3");
    document.querySelector('.flapboard4').classList.add("raiseFlap4");
    document.querySelector('.wall').innerHTML="...&#169; theMellowThemeGames";
    document.querySelector('.wall').classList.add("raiseWall");
    setInterval(() => {document.querySelector('.res').style.display='block'}, 3000);
    camp();

});
//resetSprig
document.querySelector('.res').addEventListener('click',function(){
    location.reload()});

function camp(){
    var dieFace = Math.floor(Math.random()*6)+1;
    var dieImage = "./picc/die"+ dieFace +".png";
    var dieFace2 = Math.floor(Math.random()*6)+1;
    var dieImage2 = "./picc/die"+ dieFace2 +".png";
    var dye = document.querySelectorAll('.six')[0];
    var dyeTwo = document.querySelectorAll('.six')[1];
    function engageCamp(){dye.setAttribute('src', dieImage)};
    function engage2Camp(){dyeTwo.setAttribute('src', dieImage2)};
    setInterval(engageCamp,500);
    setInterval(engage2Camp,500);
    setInterval(campConditions,1000);
    setInterval(campConditionsB,1000);
    
    function campConditionsB(){
    var oneB = document.querySelectorAll('.one')[1];
    var twoB = document.querySelectorAll('.two')[1];
    var threeB = document.querySelectorAll('.three')[1];
    var fourB = document.querySelectorAll('.four')[1];
    var fiveB = document.querySelectorAll('.five')[1];
    
    if(dieFace2==6){
        twoB.setAttribute('src',"./picc/die4.png");
        threeB.setAttribute('src',"./picc/die2.png");
        fourB.setAttribute('src',"./picc/die5.png");
        fiveB.setAttribute('src',"./picc/die3.png");
        oneB.setAttribute('src',"./picc/die1.png");
    }
    else if(dieFace2==1){
        twoB.setAttribute('src',"./picc/die3.png");
        threeB.setAttribute('src',"./picc/die5.png");
        fourB.setAttribute('src',"./picc/die2.png");
        fiveB.setAttribute('src',"./picc/die4.png");
        oneB.setAttribute('src',"./picc/die6.png");
    }
    else if(dieFace2==2||dieFace2==5){
        twoB.setAttribute('src',"./picc/die6.png");
        fiveB.setAttribute('src',"./picc/die1.png");
        oneB.setAttribute('src',"./picc/die5.png");
        
        fourB.setAttribute('src',"./picc/die4.png");
        threeB.setAttribute('src',"./picc/die3.png");
    }
    else if(dieFace2==3||dieFace2==4){    
        threeB.setAttribute('src',"./picc/die6.png");
        fourB.setAttribute('src',"./picc/die1.png");
        oneB.setAttribute('src',"./picc/die4.png");
        
        twoB.setAttribute('src',"./picc/die2.png");
        fiveB.setAttribute('src',"./picc/die5.png");
    }
    
    else {
        console.log('value < 1 || > 6');
    }
    }
    
    function campConditions(){
        var one = document.querySelectorAll('.one')[0];
        var two = document.querySelectorAll('.two')[0];
        var three = document.querySelectorAll('.three')[0];
        var four = document.querySelectorAll('.four')[0];
        var five = document.querySelectorAll('.five')[0];
        // var six = document.querySelectorAll('.six');
        // var six = document.querySelectorAll('.six');
    
    if(dieFace==6){
        two.setAttribute('src',"./picc/die4.png");
        three.setAttribute('src',"./picc/die2.png");
        four.setAttribute('src',"./picc/die5.png");
        five.setAttribute('src',"./picc/die3.png");
        one.setAttribute('src',"./picc/die1.png");
    }
    
    else if(dieFace==1){
        two.setAttribute('src',"./picc/die3.png");
        three.setAttribute('src',"./picc/die5.png");
        four.setAttribute('src',"./picc/die2.png");
        five.setAttribute('src',"./picc/die4.png");
        one.setAttribute('src',"./picc/die6.png");
    }
    
    else if(dieFace==2||dieFace==5){
        two.setAttribute('src',"./picc/die6.png");
        five.setAttribute('src',"./picc/die1.png");
        one.setAttribute('src',"./picc/die5.png");
        
        four.setAttribute('src',"./picc/die4.png");
        three.setAttribute('src',"./picc/die3.png");
    }
    
    
    else if(dieFace==3||dieFace==4){
        three.setAttribute('src',"./picc/die6.png");
        four.setAttribute('src',"./picc/die1.png");
        one.setAttribute('src',"./picc/die4.png");
        
        two.setAttribute('src',"./picc/die2.png");
        five.setAttribute('src',"./picc/die5.png");
    }
    
    else {
        console.log('value < 1 || > 6');
    }
    }

    function results(){
        if(dieFace>dieFace2){
            document.querySelectorAll('.dive')[0].innerHTML="Winner!";
            document.querySelectorAll('.dive')[1].innerHTML="---";
        }
        else if(dieFace2>dieFace){
            document.querySelectorAll('.dive')[0].innerHTML="---";
            document.querySelectorAll('.dive')[1].innerHTML="Winner!";
        }
        else if(dieFace==dieFace2){
            document.querySelectorAll('.dive')[1].innerHTML='DRAW!'
            document.querySelectorAll('.dive')[0].innerHTML="DRAW!"
        }
    }
    setInterval(results, 4700);
}