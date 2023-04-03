const img = document.getElementById('target');
const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseover', () => {
  img.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseout', () => {
  img.src = 'img/picA.jpg';
});