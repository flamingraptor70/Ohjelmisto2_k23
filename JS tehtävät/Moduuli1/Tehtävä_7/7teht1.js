function rollDice() {
    var numRolls = prompt("Enter the number of dice rolls:");
    var sum = 0;
    for (var i = 0; i < numRolls; i++) {
      var roll = Math.floor(Math.random() * 6) + 1;
      sum += roll;
    }
    document.getElementById("result").innerHTML = "The sum of " + numRolls + " dice rolls is " + sum + ".";
  }