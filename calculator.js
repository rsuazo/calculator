function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    if(num2 > 0){return num1 - num2;}
    else return num1 + (num2);
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 == 0){
        return "Cannot divide by zero";
    }
    else{
        return num1 / num2;
    }
}

function operate(operator, num1, num2){
    if(operator == "add"){return add(num1, num2);}
    else if(operator == "subtract"){return subtract(num1, num2);}
    else if (operator == "multiply"){return multiply(num1, num2);}
    else if (operator == "divide"){return divide(num1, num2);}
}

let display = document.querySelector('#display');

let currentNumbers = [];
let firstNumber = 0;
let secondNumber = 0;
let operator = "";


let decimalButton = document.querySelector('#decimalButton');

console.log(decimalButton);

window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!key) return;
    currentNumbers += event.key;
    display.innerHTML = currentNumbers;

    
    console.log(key);
});
decimalButton.addEventListener('click', () => {
    if (typeof currentNumbers == "number"){display.innerHTML = currentNumbers;}
    else{
        if(currentNumbers.includes(".")){display.innerHTML = currentNumbers;}
        else{currentNumbers += "."; 
        display.innerHTML = currentNumbers;}
    }
})

let zeroButton = document.querySelector('#zeroButton');
zeroButton.addEventListener('click', () => {
    currentNumbers += 0;
    display.innerHTML = currentNumbers;
})

let oneButton = document.querySelector('#oneButton');
oneButton.addEventListener('click', () => {
    currentNumbers += 1;
    display.innerHTML = currentNumbers;
})

let twoButton = document.querySelector('#twoButton');
twoButton.addEventListener('click', () => {
    currentNumbers += 2;
    display.innerHTML = currentNumbers;
})

let threeButton = document.querySelector('#threeButton');
threeButton.addEventListener('click', () => {
    currentNumbers += 3;
    display.innerHTML = currentNumbers;
})

let fourButton = document.querySelector('#fourButton');
fourButton.addEventListener('click', () => {
    currentNumbers += 4;
    display.innerHTML = currentNumbers;
})

let fiveButton = document.querySelector('#fiveButton');
fiveButton.addEventListener('click', () => {
    currentNumbers += 5;
    display.innerHTML = currentNumbers;
})

let sixButton = document.querySelector('#sixButton');
sixButton.addEventListener('click', () => {
    currentNumbers += 6;
    display.innerHTML = currentNumbers;
})

let sevenButton = document.querySelector('#sevenButton');
sevenButton.addEventListener('click', () => {
    currentNumbers += 7;
    display.innerHTML = currentNumbers;
})

let eightButton = document.querySelector('#eightButton');
eightButton.addEventListener('click', () => {
    currentNumbers += 8;
    display.innerHTML = currentNumbers;
})

let nineButton = document.querySelector('#nineButton');
nineButton.addEventListener('click', () => {
    currentNumbers += 9;
    display.innerHTML = currentNumbers;
})

let clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => {
    currentNumbers = [];
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    display.innerHTML = 0;
})

let additionButton = document.querySelector('#additionButton');
additionButton.addEventListener('click', () => {
    if(operator == ""){
        firstNumber = Number(currentNumbers);
        secondNumber = 0;
        operator = "add";
        currentNumbers = [];
        display.innerHTML = firstNumber + "  +";
    }else{
        
        secondNumber = Number(currentNumbers);
        result = operate(operator, firstNumber, secondNumber);
        display.innerHTML = result;
        firstNumber = result;
        currentNumbers = [];
        operator = "add";
    }
})

let subtractionButton = document.querySelector('#subtractionButton');
subtractionButton.addEventListener('click', () => {
    if(operator == ""){
        firstNumber = Number(currentNumbers);
        secondNumber = 0;
        operator = "subtract";
        currentNumbers = [];
        display.innerHTML = firstNumber + "  -";
    }else{
        secondNumber = Number(currentNumbers);
        result = operate(operator, firstNumber, secondNumber);
        display.innerHTML = result;
        
        firstNumber = result;
        operator = "subtract";
        currentNumbers = [];
    }
})

let multiplicationButton = document.querySelector('#multiplicationButton');
multiplicationButton.addEventListener('click', () => {
    if(operator == ""){
        firstNumber = Number(currentNumbers);
        secondNumber = 0;
        operator = "multiply";
        currentNumbers = [];
        display.innerHTML = firstNumber + "  x" ;
    }else{
        secondNumber = Number(currentNumbers);
        result = operate(operator, firstNumber, secondNumber);
        display.innerHTML = result;
        firstNumber = result;
        currentNumbers = [];
        operator = "multiply";
    }
})

let divisionButton = document.querySelector('#divisionButton');
divisionButton.addEventListener('click', () => {
    if(operator == ""){
        firstNumber = Number(currentNumbers);
        secondNumber = 0;
        operator = "divide";
        currentNumbers = [];
        display.innerHTML = firstNumber + "  /" ;
    }else{
        operator = "divide";
        secondNumber = Number(currentNumbers);
        result = operate(operator, firstNumber, secondNumber);
        display.innerHTML = result;
        firstNumber = result;
        currentNumbers = [];
        
    }
})

let equalsButton = document.querySelector('#equalsButton');
equalsButton.addEventListener('click', () => {
    if(operator != "" && currentNumbers != [])
    {secondNumber = Number(currentNumbers);
    let result = operate(operator, firstNumber, secondNumber);
    display.innerHTML = result.toFixed(2);
    firstNumber = 0;
    secondNumber = 0;
    currentNumbers = result.toFixed(2);
    operator = "";
    }
})
