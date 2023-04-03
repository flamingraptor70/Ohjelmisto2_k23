const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateBtn = document.getElementById("start");
const resultDisplay = document.getElementById("result");


calculateBtn.addEventListener("click", () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const operation = operationSelect.value;
  
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }
  
  // display the result
  resultDisplay.textContent = result;
});