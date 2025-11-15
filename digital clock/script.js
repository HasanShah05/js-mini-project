const clock = document.getElementById('clock')
const lightMode = document.getElementById('light')
const darkMode = document.getElementById('dark')


setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

lightMode.addEventListener('mouseover', e => {
    lightMode.style.cursor = 'pointer'
})

darkMode.addEventListener('mouseover', e => {
    darkMode.style.cursor = 'pointer'
})

lightMode.addEventListener('click', e => {
    document.body.style.backgroundColor = '#cdc8c8ff'
    document.body.style.color = 'black'
})

darkMode.addEventListener('click', e => {
    document.body.style.backgroundColor = '#212121'
    document.body.style.color = 'white'
})