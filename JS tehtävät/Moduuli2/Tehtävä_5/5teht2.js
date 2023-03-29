const numbers = [];
const numberInput = document.getElementById('number-input');
const submitButton = document.getElementById('submit-button');
const numberList = document.getElementById('number-list');

function handleSubmit() {
  const number = Number(numberInput.value);
  if (numbers.includes(number)) {
    alert(`You already entered ${number}!`);
    printNumbers();
    return;
  }
  numbers.push(number);
  printNumbers();
  numberInput.value = '';
}

function printNumbers() {
  numbers.sort((a, b) => a - b);
  numberList.innerHTML = '';
  numbers.forEach(num => {
    const li = document.createElement('li');
    li.textContent = num;
    numberList.appendChild(li);
  });
}

submitButton.addEventListener('click', handleSubmit);