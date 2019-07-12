
function subtract(arg1, arg2) {
    const result = arg1 - arg2;
    return result;
}

function multiply(arg1, arg2) {
    const result = arg1 * arg2;
    return result;
}

function divide(arg1, arg2) {
    const result = arg1 / arg2;
    return result;
}

function add(arg1, arg2) {
    const result = arg1 + arg2;
    return result;
}

function calculate(calculation) {
    const num1 = parseInt(document.getElementById('inputA').value);
    const num2 = parseInt(document.getElementById('inputB').value);
    const val = calculation(num1, num2);

    const element = document.getElementById('result');
    element.innerText = val;

    //add to history
    const histElement = document.getElementById('history');
    const newP = document.createElement('output');
    newP.innerText = val + ", ";
    histElement.prepend(newP);

    
}
 function clear1(){
    document.getElementById("history").innerText='';
 
}
 function close1(){

    window.close()
 
}