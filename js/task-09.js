function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body');
const btnChangeColorRef = document.querySelector('.change-color')
const text = document.querySelector('.color')

btnChangeColorRef.addEventListener('click', onChageColotBody)

function onChageColotBody() {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  text.textContent = color;
}
 
