let numbers = [];

function addNumber() {
	let input = document.getElementById("input-num");
	let num = parseInt(input.value);
	if (num !== 0 && !isNaN(num)) {
		numbers.push(num);
		input.value = "";
	}
}

function printNumbers() {
	let list = document.getElementById("numbers-list");
	list.innerHTML = "";
	numbers.sort((a, b) => b - a);
	for (let num of numbers) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(num));
		list.appendChild(li);
	}
}
