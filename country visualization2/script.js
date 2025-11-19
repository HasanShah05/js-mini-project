const countries = [
    'Afghanistan',
    'Albania',  
    'Algeria',  
    'Andorra',  
    'Angola',  
    'Antigua and Barbuda',  
    'Argentina',  
    'Armenia',  
    'Australia',  
    'Austria',  
    'Azerbaijan',  
    'Bahamas',  
    'Bahrain',  
    'Bangladesh',  
    'Barbados',  
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

const subtitle = document.querySelector('.subtitle')
const card = document.querySelector('.card')
const bottom = document.querySelector('.bottom')
const starting = document.querySelector('.starting')
const search = document.querySelector('.search')
const sorting = document.querySelector('.sorting')
const userInput = document.querySelector('#search')
const info = document.querySelector('.info')

let allCountries = countries
let searchMode = 'starting'
let sortMode = 'A-Z'

subtitle.innerHTML = `Total number of Countries:${countries.length}`
subtitle.style.fontWeight = 'bold'
subtitle.style.fontSize = '20px'

function renderCountries(countriesList){
    bottom.innerHTML = ''

    const searchTerm = userInput.value
    if (searchTerm.length > 0) {
        info.innerHTML = `Found <span class="highlight">${countriesList.length}</span> countries matching "<span class="highlight">${searchTerm}</span>"`;
    }else{
        info.innerHTML = ''
    }

    countriesList.forEach(country => {
        const card = document.createElement('div')
        card.className = 'card'
        card.textContent = country
        card.style.display = 'flex'
        card.style.flexDirection = 'row'
        bottom.appendChild(card)
    });
}

function updateDisplay(){
    const searchTerm = userInput.value.toLowerCase()
    let filteredCountries = []

    if (searchMode === 'starting') {
        filteredCountries = allCountries.filter(country => 
            country.toLowerCase().startsWith(searchTerm)
        )
    }else{
        filteredCountries = allCountries.filter(country => 
            country.toLowerCase().includes(searchTerm)
        )
    }

    if (sortMode === 'A-Z') {
        filteredCountries.sort()
    }else{
        filteredCountries.sort().reverse()
    }

    renderCountries(filteredCountries)
}

userInput.addEventListener('input', updateDisplay)

starting.addEventListener('click', e => {
    searchMode = 'starting'
    userInput.placeholder = 'Search country (Starts with)'
    starting.classList.add('active')
    search.classList.add('active')
    updateDisplay()
})

search.addEventListener('click', e => {
    searchMode = 'any'
    userInput.placeholder = 'Search country (Any word)'
    search.classList.add('active')
    starting.classList.remove('active')
    updateDisplay()
})

starting.addEventListener('click', e => {
    const icon = sorting.querySelector('i')

    if (sortMode === 'A-Z') {
        sortMode = 'Z-A'
        icon.className = 'fa-solid fa-arrow-down-z-a';
    }else{
        sortMode = 'A-Z'
        icon.className = 'fa-solid fa-arrow-up-z-a';

    }
    updateDisplay()
})
