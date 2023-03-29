function reverseDogNames() {
    let dogs = [];
    dogs.push(document.getElementById("dog1").value);
    dogs.push(document.getElementById("dog2").value);
    dogs.push(document.getElementById("dog3").value);
    dogs.push(document.getElementById("dog4").value);
    dogs.push(document.getElementById("dog5").value);
    dogs.push(document.getElementById("dog6").value);
  
    dogs.sort();
    dogs.reverse();
  
    let list = document.getElementById("result");
    for (let i = 0; i < dogs.length; i++) {
      let item = document.createElement("li");
      item.textContent = dogs[i];
      list.appendChild(item);
    }
  }
  