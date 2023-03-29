function rollDice() {
    const min = 1;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const diceRolls = document.getElementById("diceRolls");
  
    let roll;
    do {
    roll = rollDice();
  
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(roll));
    diceRolls.appendChild(li);
    } while (roll !== 6);