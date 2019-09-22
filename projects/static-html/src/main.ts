const terminalMessage = document.querySelector('#terminal>pre');

const newComponent = document.querySelector('#new-component');
newComponent.addEventListener('click', (event: MouseEvent) => {
  terminalMessage.textContent = 'ng generate component xyz';
});
const material = document.querySelector('#material');
material.addEventListener('click', (event: MouseEvent) => {
  terminalMessage.textContent = 'ng add @angular/material';
});
const pwa = document.querySelector('#pwa');
pwa.addEventListener('click', (event: MouseEvent) => {
  terminalMessage.textContent = 'ng add @angular/pwa';
});
const dependency = document.querySelector('#dependency');
dependency.addEventListener('click', (event: MouseEvent) => {
  terminalMessage.textContent = 'ng add _____';
});
const tests = document.querySelector('#tests');
tests.addEventListener('click', (event: MouseEvent) => {
  terminalMessage.textContent = 'ng test';
});
const prod = document.querySelector('#prod');
prod.addEventListener('click', (event: MouseEvent) => {
  terminalMessage.textContent = 'ng build --prod';
});
