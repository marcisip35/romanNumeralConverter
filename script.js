const numeralForm = document.querySelector("#numeralForm");
const number = document.querySelector("#number");
const button = document.querySelector("#convert-btn");
const numeralShow = document.querySelector("#numeralShow");
const output = document.querySelector("#output");

const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

button.addEventListener("click", () => {
    let numberValue = parseInt(number.value); 
    if (isNaN(numberValue)) {
        updateOutput("Please enter a valid number");
    } else if (numberValue < 1) {
        updateOutput("Please enter a number greater than or equal to 1");
    } else if (numberValue >= 4000) {
        updateOutput("Please enter a number less than or equal to 3999");
    } else {
        const romanNumeral = integerToRoman(numberValue);
        updateOutput(romanNumeral);
    }
});

function integerToRoman(num) {
    let roman = ""; // Reset roman to an empty string each time the function is called
    
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            roman += symbols[i];
            num -= values[i];
        }
    }

    return roman;
}

function updateOutput(outputValue) {
    numeralShow.style.display = "flex";
    output.innerHTML = outputValue;
}
