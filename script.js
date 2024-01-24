const buttons = document.querySelectorAll(".btn");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let num1 = "";
let num2 = "";
let operation = "";
let result = 0;
// let isOperation = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Handle button click
        if (button.hasAttribute("data-number")) {
            storeNumber(button.textContent);
        }
        else if(button.hasAttribute("data-operation")){
            storeOperation(button.textContent);
        }
        else if (button.hasAttribute("data-result")) {
            operate(num1, num2, operation)
            displayOperation(num1, `${operation} ${num2} = `)
            displayResult(result);
            num1 = result;
            num2 = "";
        }
    });
});

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber)

function storeNumber(string) {
    if (operation === "") {
        num1 = num1 + string;
        displayResult(num1);
    } else {
        num2 = num2 + string;
        displayResult(num2);
    }
    // console.log("num1= " + num1);
    // console.log("num2= " + num2);
}

function storeOperation(string) {
    if (num1 !== "" && num2 !== "") {
        // console.log("brah 12")
        operate(num1, num2, operation)
        operation = string;
        displayOperation(result, operation)
        displayResult(result);
        num1 = result;
        num2 = "";
    } else {
        // console.log("brah 13")
        operation = string;
        displayOperation(num1, string);
    }
}

function displayOperation(num1, operation) {
    const container = document.querySelector(".display-operation");
    container.textContent = `${num1} ${operation}`
}

function displayResult(num) {
    const container = document.querySelector(".display-result");
    container.textContent = `${num}`
}

function operate (num1, num2, operation) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (operation === "+") {
        result =  add(num1, num2);
    } else if (operation === "-") {
        result = subtract(num1, num2);
    } else if (operation === "÷") {
        result = divide(num1, num2);
    } else if (operation === "x") {
        result = multiply(num1, num2);
    }
}  

function clear () {
    const container1 = document.querySelector(".display-operation");
    container1.textContent = ``

    const container2 = document.querySelector(".display-result");
    container2.textContent = ``

    num1 = "";
    num2 = "";
    result = 0;
    operation = "";
}

function deleteNumber() {
    if (num2 === "") {
        num1 = num1.slice(0, -1);
        // console.log(num1);
        // console.log("delete1");
        displayResult(num1);
    } else {
        num2 = num2.slice(0, -1);
        // console.log("delete2");
        displayResult(num2);
    }
}

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}
 