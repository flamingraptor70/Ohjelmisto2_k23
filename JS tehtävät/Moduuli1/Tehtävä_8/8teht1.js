"use strict";

function printLeapYears() {
  const startYear = parseInt(document.getElementById("startYear").value);
  const endYear = parseInt(document.getElementById("endYear").value);

  const leapYearsElement = document.getElementById("leapYears");
  leapYearsElement.innerHTML = "";

  for (let year = startYear; year <= endYear; year++) {
    if ((year % 400 == 0) || ((year % 4 === 0) && year % 100 !== 0)) {
      const li = document.createElement("li");
      li.textContent = year;
      leapYearsElement.appendChild(li);
    }
  }
}