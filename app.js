const buttonE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result")


for (let i = 0; i < buttonE1.length; i++) {
    buttonE1[i].addEventListener("click", () =>{
        const buttonValue = (buttonE1[i].textContent);
        if (buttonValue === "C") {
            clearResult()
        } else if (buttonValue === "del") {
            deleteDigit()
        } else if (buttonValue === "+/-") {
            toggleSign()
        }else if (buttonValue === "=") {
            calculateResult()
        }else if (buttonValue === "%") {
            calculatePercentage()
        }else {
            appendValue(buttonValue)
        }
        
    });
    
}


function clearResult(){
    inputFieldE1.value = "";
    
}


function deleteDigit() {
    inputFieldE1.value = inputFieldE1.value.slice(0, -1)
}

function calculatePercentage() {
    inputFieldE1.value += "/100*";
}


function toggleSign() {
    if (inputFieldE1.value !== "") {
        inputFieldE1.value = -Number(inputFieldE1.value);
    }
}


function calculateResult() {
    inputFieldE1.value = eval(inputFieldE1.value); // eval() is a built-in JavaScript function that evaluates a string as JavaScript code.
}


function appendValue(buttonValue) {
    inputFieldE1.value += buttonValue;
}
