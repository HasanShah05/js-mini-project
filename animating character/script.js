function randomColor(){
    let str = '0123456789abcdef'
    let hexColor = [ ]
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        hexColor.push(str[index])
    }
    return '#' + hexColor.join('')
}

function fontWeight(){
    const weight = [100,200,300,400,500]
    return weight[Math.floor(Math.random() * weight.length)]
}

setInterval(() => {
    const container = document.querySelector('div')
    container.innerHTML = ''

    const heading = document.createElement('h1')
    const text = '30 days of javascript challange 2020 by asabeneh yetayeh'.split('')

    text.forEach(character => {
        const span = document.createElement('span')
        span.style.color = randomColor()
        span.textContent = character;
        span.style.letterSpacing = '5px'
        span.style.fontSize = '8rem'
        heading.appendChild(span)
    })

    heading.style.fontWeight = fontWeight();
    container.style.backgroundColor = randomColor()


    container.appendChild(heading)

},2000)