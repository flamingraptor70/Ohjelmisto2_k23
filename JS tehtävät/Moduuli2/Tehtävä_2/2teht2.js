function getParticipants() {
    let numParticipants = Number(document.getElementById("numParticipants").value);
    let participants = [];
    for (let i = 1; i <= numParticipants; i++) {
      participants.push(prompt("Enter name of participant " + i));
    }
    participants.sort();
    let list = document.getElementById("participantList");
    for (let i = 0; i < participants.length; i++) {
      let item = document.createElement("li");
      item.textContent = participants[i];
      list.appendChild(item);
    }
  }
  