const cointainer = document.querySelector('.cointainer')
const banner = document.querySelector('.banner')
const boxes = document.getElementsByClassName('box')
const techs = document.querySelector('.techs')
const word = document.querySelector('.word');
const icon = document.querySelector('.icon');


const words = [
    { text: "HTML", icon: "fa-brands fa-html5", color: "#e34c26" },
    { text: "CSS", icon: "fa-brands fa-css3-alt", color: "#264de4" },
    { text: "JavaScript", icon: "fa-brands fa-js", color: "#f0db4f" },
    {text:'Git', icon:'fa-solid fa-code-branch', color:'orange'}
];

let currentIndex = 0

function wordChange(){
    word.classList.add('hide')
    icon.style.opacity = 0
    icon.style.transition = 'opacity 0.5s ease'

    setTimeout( () => {
        currentIndex = (currentIndex + 1) % words.length
        const nextItem = words[currentIndex]

        word.textContent = nextItem.text
        icon.className = `icon ${nextItem.icon}`
        icon.style.color = nextItem.color

        word.classList.remove('hide')
        word.classList.add('prepare')

        setTimeout( () => {
            word.classList.remove('prepare');
            icon.style.opacity = 1;
        },50)
    },500)
}
setInterval(wordChange,2000)

const technologies = [
    {text:'HTML', color:'orange'},
    {text:'JAVASCRIPT', color:'yellow'},
    {text:'GIT', color:'red'},
    {text:'TAILWIND', color:'lightblue'}
]

let techIndex = 0

function techChange(){
    techIndex = (techIndex + 1) % technologies.length
    const nextVal = technologies[techIndex]

    techs.textContent = nextVal.text
    techs.style.color = nextVal.color
}
setInterval(techChange,2000)