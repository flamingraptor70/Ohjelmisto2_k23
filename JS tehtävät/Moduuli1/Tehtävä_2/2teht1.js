const name = prompt("Type your name");

const message = `Hello, ${name}!`;

const greetingElement = document.getElementById("greeting");

greetingElement.innerText = message;
