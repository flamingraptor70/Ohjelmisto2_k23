const ul = document.getElementById("target");

const li1 = document.createElement("li");

li1.textContent = "First item";

const li2 = document.createElement("li");
li2.textContent = "Second item";
li2.classList.add("my-item");

const li3 = document.createElement("li");
li3.textContent = "Third item";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);