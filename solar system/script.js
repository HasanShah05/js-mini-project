const selectedElement = document.getElementById('my-select') 
const imageElement = document.getElementById('image')
let userInput = document.getElementById('mass')

selectedElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  imageElement.src = selectedValue;
});