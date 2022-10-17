// create function for each operation: add, subtract, multiply and divide

// helper functions
function add(num1, num2 ){
return num1 + num2
}


function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    return num1 / num2
}
// create a function named operate that takes in 3 parameters: 2 numbers and the operation to be performed 

function operate(num1,num2,operator){
    operator = operator.toLowerCase()
    if(operator === 'add'){
        return add(num1,num2)
    }
    else if(operator === 'subtract'){
        return subtract(num1,num2)
    }
    else if(operator === 'multiply'){
        return multiply(num1,num2)
    }
    else if(operator === 'divide'){
        return divide(num1,num2)
    }
    else{
        return 'error operator not recognized'
    }
}

// variables to hold values from form inputs
let num1 = 0
let num2 = 0
let operatorButtonVal = ''

// function that runs when the equals button is clicked using onclick
function equalsClicked(){
    // saving the number value of the first imput to num1
    // .value returns a string
    num1 = document.querySelector('#num1').value
    // parseInt changes num1 data type to number 
    num1 = parseInt(num1)

    operatorButtonVal = document.querySelector('#operator').value
    console.log(operatorButtonVal)
    num2 = document.querySelector('#num2').value
    num2 = parseInt(num2)
    console.log(num1)
    console.log(num2)
    document.querySelector('#result-num').innerHTML = operate(num1,num2,operatorButtonVal);

    // next steps 
    // create a variable num2 
    // check values console.log
    // connect math functions 
    // display result on the page using DOM methods
}

