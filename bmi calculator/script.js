const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'please enter a valid height'
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'please enter a valid weight'
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span><br>`
        if (bmi <= 18.6) {
            results.innerHTML += 'you are under weight'
        }else if (bmi <= 24.9) {
            results.innerHTML += 'your bmi is normal'
        }else{
            results.innerHTML += 'you are overweight'
        }
    } 
})