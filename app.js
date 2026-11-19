const buttonE1 = document.querySelectorAll("button");


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
        }else {
            appendValue(buttonValue)
        }
        
    });
    
}


function clearResult() {
    
}


function deleteDigit() {
    
}


function toggleSign() {
    
}


function calculateResult() {
    
}


function appendValue() {
    
}
