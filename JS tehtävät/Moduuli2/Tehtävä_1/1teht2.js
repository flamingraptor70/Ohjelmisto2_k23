function reverseNumbers() {
    let numbers = [];
    numbers.push(Number(document.getElementById("num1").value));
    numbers.push(Number(document.getElementById("num2").value));
    numbers.push(Number(document.getElementById("num3").value));
    numbers.push(Number(document.getElementById("num4").value));
    numbers.push(Number(document.getElementById("num5").value));
  
    let reversedNumbers = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
      reversedNumbers.push(numbers[i]);
    }
  
    document.getElementById("result").innerHTML = reversedNumbers.join(", ");
  }