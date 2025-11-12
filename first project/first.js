let yearText = document.querySelector('strong')
yearText.style.fontSize = '40px'

function colour() {
    let str = '0123456789abcdef'
    let colorHex = []
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        colorHex.push(str[index])
    }
    return '#' + colorHex.join('')
}

(setInterval( () => {
    yearText.style.color = colour()
},2000))

let h1 = document.querySelector('h1')
h1.style.fontSize = '15px'
h1.style.fontFamily = 'courier'
h1.style.fontWeight = 'bold'
h1.style.textAlign = 'center'

let h2 = document.querySelector('h2')
h2.style.textAlign = 'center'

function cuurentdate() {
    let d = new Date()

    let date = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    let hour = d.getHours()
    let min = d.getMinutes()
    date = date < 10 ? '0'+date.toString() : date
    hour = hour < 10 ? '0'+hour.toString() : hour
    min = min < 10 ? '0'+min.toString() : min

    return `${month}:${date}:${year}  ${hour}:${min}`;

}

let date = document.querySelector('p')
date.textContent = cuurentdate()

      date.style.margin = 'auto';
      date.style.padding = '6px'
      date.style.textAlign = 'center';
      date.style.width = '20%';

setInterval( () => {
    date.style.backgroundColor = colour()
},2000)

let listItems = document.querySelectorAll('li')
for (let item of listItems) {
    item.style.listStyleType = 'none'
    item.style.margin = '10px'
    item.style.padding = '10px'
}

for (const item of listItems) {
    if (item.textContent.endsWith('Done')) {
        item.style.backgroundColor = '#72dc72ff'
    }
    else if (item.textContent.endsWith('Ongoing')) {
        item.style.backgroundColor = '#efef3eff'
    }
    else if (item.textContent.endsWith('Coming')) {
        item.style.backgroundColor = '#f14d6eff'

        
    }
     item.style.fontFamily = 'san-serif';
        item.style.marginRight = '50px';
}