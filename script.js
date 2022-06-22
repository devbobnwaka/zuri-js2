let operator = prompt("Enter the operation you want (*, /, +, -): ");
let operand1 = prompt("Enter the first operand: ");
let operand2 = prompt("Enter the second operand: ");

if(operator == '*'){
    alert(`Answer: ${operand1} * ${operand2} = ${operand1 * operand2}` );
} else if(operator == '+'){
    alert(`Answer: ${operand1} * ${operand2} = ${operand1 * operand2}` );
} else if(operator == '-'){
    alert(`Answer: ${operand1} * ${operand2} = ${operand1 * operand2}` );
} else if(operator == '/'){
    alert(`Answer: ${operand1} * ${operand2} = ${operand1 * operand2}` );
} else {
    alert('Invalid operator!!!')
}