function calculateSquareRoot() {
    var shouldCalculate = confirm("Should I calculate the square root?");
    if (shouldCalculate) {
      var number = prompt("Enter a number:");
      if (number < 0) {
        document.getElementById("result").innerHTML = "The square root of a negative number is not defined.";
      } else {
        var squareRoot = Math.sqrt(number);
        document.getElementById("result").innerHTML = "The square root of " + number + " is " + squareRoot + ".";
      }
    } else {
      document.getElementById("result").innerHTML = "The square root is not calculated.";
    }
  }