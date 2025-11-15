const selectedElement = document.getElementById('my-select') 
const imageElement = document.getElementById('image')
let userInput = document.getElementById('mass')
let result = document.querySelector('.description')
const calButton = document.querySelector('button')

const gravityData = {
  mercury: 3.7,
  venus: 8.87,
  earth: 9.8,
  mars: 3.71,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.15,
  pluto: 0.62,
  moon: 1.62
};

selectedElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value; 
  
  if (selectedValue === 'none') {
    imageElement.src = './images/earth.png'; 
  } else {
    imageElement.src = `./images/${selectedValue}.png`;
  }
});

function weightCalculation(mass, planetValue){
    const gravity = gravityData[planetValue]
    const weight = mass * gravity
    return weight.toFixed(2)
}

calButton.addEventListener('click', e => {
    const mass = parseFloat(userInput.value)
    const planetName = selectedElement.value

    if (isNaN(mass) || mass <= 0) {
        result.innerHTML = 'Please a valid mass in kilogram'
        return
    }else if (planetName === 'none') {
        result.innerHTML = 'Please select a planet'
        return
    }
    const finalWeight = weightCalculation(mass, planetName)

    const displayName = planetName.charAt(0).toUpperCase() + planetName.slice(1);
    result.innerHTML = `The weight of the object on <strong>${displayName}</strong> is <strong>${finalWeight} N</strong>`;

    userInput.value = ''
})