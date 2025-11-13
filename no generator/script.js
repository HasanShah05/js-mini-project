let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let button = document.querySelector('button')
let box = document.querySelector('#box')
let cointainer = document.querySelector('.cointainer') 

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

button.addEventListener('click', e => {

    let oldTable = cointainer.querySelector('table');
    if (oldTable) {
        oldTable.remove();
    }

    let table = document.createElement('table');
    
    table.style.width = '100%';
    table.style.maxWidth = '600px';
    table.style.margin = '20px auto';
    table.style.textAlign = 'center';
    table.style.fontFamily = 'arial';
    table.style.color = 'white';
    table.style.fontWeight = 'bold';
    table.style.borderSpacing = '5px';
    table.style.fontSize = '30px'

    let currentRow;
    let limit = parseInt(box.value);

    for (let i = 1; i <= limit; i++) {
        
        if ((i - 1) % 6 === 0) {
            currentRow = document.createElement('tr');
            table.appendChild(currentRow);
        }

        let cell = document.createElement('td');
        cell.textContent = i;
        cell.style.padding = '15px';

        if (i % 2 == 0) {
            cell.style.backgroundColor = '#5abc7a';
        }
        else if (isPrime(i)) {
            cell.style.backgroundColor = '#eb695b';
        }
        else{
            cell.style.backgroundColor = '#dcdc33ff';
        }

        currentRow.appendChild(cell);
    }

    cointainer.appendChild(table);
})