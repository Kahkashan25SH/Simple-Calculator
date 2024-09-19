function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;

    if (operator === "Add") {
        result = num1 + num2;
    }
    else if (operator === "Sub") {
        result = num1 - num2;
    }
    else if (operator === "MUL") {
        result = num1 * num2;
    }
    else if (operator === "Div") {
        if (num2 === 0) {
            result = "Cannot divide by zero!";
        } else {
            result = num1 / num2;
        }
    }
    else {
        result = "Invalid Operator!";
    }

    document.getElementById('result').textContent = "Result: " + result;
}
// function calculate() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const operator = document.getElementById('operator').value;
    
//     if (isNaN(num1) || isNaN(num2)) {
//         document.getElementById('result').textContent = "Please enter valid numbers!";
//         return;
//     }

//      let result;

// if(operator === "Addition"){
//     result = num1 + num2;
// }
// else if (operator === "Subtraction"){
//     result = num1 - num2;
// }
// else if (operator === "Multiplication"){
//     result = num1 * num2;
// }
// else if (operator ===  "Division"){
//     if (num2 === 0) {
//         result = "Cannot divide by zero!";
//    result = num1 / num2;
// }
// else{
//     result = "Invalid Operator!";
// }
// document.getElementById('result').textContent = "Result: " + result;
// }};