const sortButton = document.querySelector('#sort-button');
const nameInput = document.querySelector('#name-input');
const result = document.querySelector('#result');

const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

function assignHouse() {
  const randomNumber = Math.floor(Math.random() * 4); // Generate random number between 0 and 3
  const house = houses[randomNumber];
  return house;
}

function displayResult() {
  const name = nameInput.value;
  if (name) {
    const house = assignHouse();
    result.textContent = `${name}, you are in ${house}!`;
  } else {
    result.textContent = 'Please enter your name.';
  }
}

sortButton.addEventListener('click', displayResult);