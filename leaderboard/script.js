const addplayer = document.querySelector('#addplayer')
const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const country = document.querySelector('#country')
const score = document.querySelector('#score')
const leaderboardList = document.querySelector('#leaderboard')

let leaderboardEntries = []

function updateLeaderboard() {
    leaderboardList.innerHTML = ''
    leaderboardEntries.sort((a, b) => b.score - a.score)
    leaderboardEntries.forEach((entry, index) => {
        const listItem = document.createElement('div')
        listItem.classList.add('leaderboard-entry')
        listItem.innerHTML = `
        <div class="name-and-date">
        <span class="player-name">${entry.fname} ${entry.lname}</span>
        <span class="entry-date">${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <span class="player-country">${entry.country}</span>
        <span class="player-score">${entry.score}</span>
        <div class="action-buttons">
        <button class="remove-btn btn" data-index="${index}">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="increase-btn btn" data-index="${index}">+5</button>
        <button class="decrease-btn btn" data-index="${index}">-5</button>
        </div>`
        leaderboardList.appendChild(listItem)
    })
    buttonListeners();
}
function buttonListeners() {
    const increaseButtons = document.querySelectorAll(".increase-btn");
    const decreaseButtons = document.querySelectorAll(".decrease-btn");
    const removeButtons = document.querySelectorAll(".remove-btn");

    increaseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            leaderboardEntries[index].score += 5;
            updateLeaderboard();
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            if (leaderboardEntries[index].score >= 0) {
                leaderboardEntries[index].score -= 5;
                updateLeaderboard();
            }
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            leaderboardEntries.splice(index, 1);
            updateLeaderboard();
        });
    });
}

addplayer.addEventListener("click", (e) => {
    e.preventDefault();

    const fNameVal = fname.value.toUpperCase();
    const lNameVal = lname.value.toUpperCase();
    const countryVal = country.value.toUpperCase();
    const scoreVal = parseInt(score.value);

    if (fNameVal && lNameVal && countryVal && !isNaN(scoreVal)) {
        leaderboardEntries.push({
            fname: fNameVal,
            lname: lNameVal,
            country: countryVal,
            score: scoreVal
        });

        fname.value = "";
        lname.value = "";
        country.value = "";
        score.value = "";
        updateLeaderboard();
    } else {
        alert("Please fill in all fields correctly");
    }
});