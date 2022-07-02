var keyCount = document.querySelectorAll('.key').length;
for (var i=0; i<keyCount; i++){
    document.querySelectorAll('.key')[i].addEventListener
    (
        'click', function click(){
            var clickSound = new Audio("button_click.mp3");
            clickSound.play();
    }
    );
}
const defaultRubric = {
    num1: null,
    displayValue: '0',
    operator: null,
    requireNum2: false,
    };
const screen = document.getElementsByClassName('screen')[0];
    
function refreshScreen(){
    screen.value = defaultRubric.displayValue;
}
refreshScreen();

const numberFrameKeys = document.querySelector('.numberFrame');
const operatorFrameKeys = document.querySelector('.operatorFrame');

numberFrameKeys.addEventListener('click',(event)=>{
    const target = event.target;
    const value = target.value;
    if (!target.matches('button')){
        return;
    }    
    switch (value) {
        case '.':
            registerDecimal(target.value);
            break;
    
        default:
            if (Number.isInteger(parseFloat(value))){
            registerDigit(target.value);                
            }
            break;
    }
    refreshScreen();
});

operatorFrameKeys.addEventListener('click',(event)=>
{
    const {target} = event;
    if (!target.matches('button')){
        return;
    }
    const {value} = target;
    switch (value) {
        case 'add':
        case 'mult':
        case 'divd':
        case 'subt':
        case 'equals':
            activateOpKey(target.value);
            break;
        case 'CLR':
            reset();
            break;
        default:
            console.log('Oll Correct?');
            break;
        }
        refreshScreen();
});

//giving the digit keys ability insert their numbers and modify display content//
function registerDigit(a){
    const {displayValue, requireNum2} = defaultRubric;
    if (requireNum2===true){
        defaultRubric.displayValue = a;
        defaultRubric.requireNum2 = false;
    }
    else{
        defaultRubric.displayValue = displayValue==='0'?
        a: displayValue + a;
    }
}
var git = document.querySelector('#sig');
function registerDecimal(a){
    if (defaultRubric.requireNum2===true){
        defaultRubric.displayValue='0.';
        defaultRubric.requireNum2 = false;}

    if(!defaultRubric.displayValue.includes(a)){
        defaultRubric.displayValue += a;
    }
}

//activating the operator keys//
function activateOpKey (selectedOperator){
    const {num1, displayValue, operator} = defaultRubric;
    const screenDigitValue = parseFloat(displayValue);

    if (operator && defaultRubric.requireNum2) {
        defaultRubric.operator = selectedOperator;
        return;
    }
    if (num1 === null && !isNaN(screenDigitValue)){
        defaultRubric.num1 = screenDigitValue;
    }
    else if(operator){
        const calculationResult = calculationInProgress(num1, screenDigitValue, operator);
        defaultRubric.displayValue = parseFloat(calculationResult.toFixed(9));
        defaultRubric.num1 = calculationResult;
    }
    defaultRubric.requireNum2 = true;
    defaultRubric.operator = selectedOperator;
}

//intermediate result stage of when a calculation is done after a number inputed is and operator selected, and new number inputed afterwards.//
    git.innerHTML="theMellowTheme";
    calculationInProgress=(num1, num2, operator)=>{
        if(operator==='add'){return num1+num2;}
        else if(operator==='subt'){return num1-num2;}
        else if(operator==='divd'){return num1/num2;}
        else if(operator==='mult'){return num1*num2;}
        return num2;
    }
//end of inchoate stage//
function reset(){
    defaultRubric.displayValue='0';
    defaultRubric.num1=null;
    defaultRubric.requireNum2=false;
    defaultRubric.operator=null;
    console.log(defaultRubric);
}