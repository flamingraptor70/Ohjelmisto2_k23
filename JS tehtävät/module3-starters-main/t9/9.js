// Selecting DOM elements
const calculation = document.getElementById('calculation');
const startBtn = document.getElementById('start');
const result = document.getElementById('result');

// Function to calculate result
function calculate() {
  // Getting the calculation entered by user
  const input = calculation.value;
  
  // Checking if input is empty
  if (input === '') {
    result.innerText = 'Please enter a calculation';
    return;
  }
  
  // Checking if input contains any invalid characters
  const regex = /^[0-9+\-*\/\s]+$/; // Regex to match only numbers, +, -, *, / and spaces
  if (!regex.test(input)) {
    result.innerText = 'Invalid input';
    return;
  }
  
  // Splitting input into operands and operator
  const operands = input.split(/[\+\-\*\/]/);
  const operator = input.match(/[\+\-\*\/]/)[0];
  
  // Converting operands to numbers
  const num1 = parseInt(operands[0]);
  const num2 = parseInt(operands[1]);
  
  // Calculating result based on operator
  let output;
  switch(operator) {
    case '+':
      output = num1 + num2;
      break;
    case '-':
      output = num1 - num2;
      break;
    case '*':
      output = num1 * num2;
      break;
    case '/':
      output = num1 / num2;
      break;
  }
  
  // Displaying the result
  result.innerText = `${num1} ${operator} ${num2} = ${output}`;
}

// Event listener for button click
startBtn.addEventListener('click', calculate);
