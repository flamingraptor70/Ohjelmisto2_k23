"use strict";

const startYear = +prompt(/*message:*/  "Start year is:");
const endYear = parseInt(prompt(/*message:*/ "End year is:"));



document.querySelector(/*selectors:*/ "#startYear").innerHTML = startYear.toString();
document.querySelector(/*selectors:*/ "startYear").innerHTML = startYear.toString();

const leapYearsElement = document.querySelector("#leapYears");


for(let year = startYear; year <= endYear; year++); {
    if ((year % 400 == 0) || ((year % 4 === 0) && year % 100 !== 0)) {
        console.log(year)
        leapYearsElement.innerHTML += `<li>${year}</li>`
            }
        }

