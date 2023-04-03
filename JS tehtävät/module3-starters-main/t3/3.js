'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.getElementById("target");

let html = '';
for (let i = 0; i < names.length; i++) {
  html += '<li>' + names[i] + '</li>';
}

ul.innerHTML = html;