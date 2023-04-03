const form = document.querySelector('#source');
form.addEventListener('submit', (event) => {

  event.preventDefault();

  const firstNameInput = document.querySelector('input[name="firstname"]');
  const lastNameInput = document.querySelector('input[name="lastname"]');

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  const target = document.querySelector('#target');

  target.textContent = `Your name is ${firstName} ${lastName}`;
});
