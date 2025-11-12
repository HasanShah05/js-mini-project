import { countries } from "./countries.js";

let h2 = document.querySelector('h2')
h2.style.textAlign = 'center'

let totaCountries = document.createElement('h3')
totaCountries.textContent = `Total no of Countries:-${countries.length}`
totaCountries.style.textAlign = 'center'
document.body.appendChild(totaCountries)

let table = document.createElement('table')
    table.style.textAlign = 'center';
    table.style.padding = '2px';
    table.style.width = '50%';
    table.style.marginLeft = '25%'
    table.style.marginRight = '25%'
    table.style.fontSize = '7px';
    table.style.fontWeight = '400';
    table.style.letterSpacing = '1px';

    let countryCount = 0
    while (countryCount < countries.length) {
        let row = document.createElement('tr')

        for (let i = 0; i < 6; i++) {
            if (countryCount == countries.length) break 
            
        }
    }

document.body.appendChild(table)