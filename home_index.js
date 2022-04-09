function prep(){
    var btn = document.getElementById('quiClix');
    var quicText = document.getElementById('it');
    var side = document.getElementsByClassName('sidebar')[0];
    var sideContent = document.getElementsByClassName('sideContentUl')[0];

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
//step 2 within prep
    btn.onclick = function step2(){
        btn.classList.remove('theKnobA');
        btn.classList.add('theKnobB');
        closeBar();
//step 3 within step 2
        btn.onclick = function step3(){
            btn.classList.add('theKnobC');
            btn.classList.remove('theKnobB');
            openBar();
//step 4 within step 3
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
