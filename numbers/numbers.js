function isPrime(num) {
    if (num <= 1) {
    return false;
  }
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
}

let h2 = document.querySelector('h2')
h2.style.textAlign = 'center'
h2.style.color = 'black'

let div = document.createElement('div')
document.body.appendChild(div)

div.style.display = 'flex'
div.style.flexWrap = 'wrap'
div.style.justifyContent = 'center'
div.style.gap = '5px'

let number 
for (let i = 0; i <= 101; i++) {
    number = document.createElement('h1')
    number.textContent = i
    number.style.textAlign = 'center'
    number.style.width = '15%'
    if (i % 2 == 0) {
        number.style.backgroundColor = '#72dc72ff'
    }
    else if (isPrime(i)) {
        number.style.backgroundColor = '#f14d6eff'
    }
    else{
        number.style.backgroundColor = '#dcdc33ff'
    }
    div.appendChild(number)
}
