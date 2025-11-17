const info = document.querySelector('.subtitle')
const popButton = document.querySelector('#pop_btn')
const langButton = document.querySelector('#lang_btn')
const feedback = document.querySelector('.feedback')
const stats = document.getElementById('stat') 
const graphTitle = document.querySelector('.graph-title');


if (typeof countries_data !== 'undefined') {
    info.innerHTML = `Currently, we have ${countries_data.length} countries.`
}

function populatedCountries(){
    const tenCountriersPopulated = countries_data.reduce((sum, country) => sum + country.population, 0)
    const sortedCountries = [...countries_data]
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)

    const top10 = [
        {name: 'World', population: tenCountriersPopulated},
        ...sortedCountries
    ]
    return {data: top10, maxVal: tenCountriersPopulated}
}

function mostLanguages(){
    const allLanguages = {}

    countries_data.forEach(country => {
        country.languages.forEach(lang => {
            if (allLanguages[lang]) {

                allLanguages[lang]++ 
            }else{
                allLanguages[lang] = 1
            }
        })
    })

    const sortedLanguages = Object.entries(allLanguages)
    .map(([language, count]) => ({name: language, population: count}))
    .sort((a,b) => b.population - a.population)
    .slice(0,10)

    return {data: sortedLanguages, maxVal: sortedLanguages[0].population}
}

function renderGraph(data, maxValue) {

    stats.innerHTML = ''; 

    data.forEach(item => {
        const widthPercent = (item.population / maxValue) * 100;
        
        const row = document.createElement('div');
        row.className = 'row';
        
        row.innerHTML = `
            <div class="label">${item.name}</div>
            <div class="bar-container">
                <div class="bar" style="width: ${widthPercent}%;"></div>
            </div>
            <div class="count">${item.population.toLocaleString()}</div>
        `;
        
        stats.appendChild(row);
    });
}

popButton.addEventListener('click', () => {
    graphTitle.textContent = '10 Most Populated Countries in the World';
    feedback.textContent = '';
    

    const { data, maxVal } = populatedCountries();
    renderGraph(data, maxVal);
});

langButton.addEventListener('click', () => {
    graphTitle.textContent = '10 Most Spoken Languages in the World';
    feedback.textContent = '';
    
    const { data, maxVal } = mostLanguages();
    renderGraph(data, maxVal);
});