const homeScoreEl = document.getElementById("home-score")
const awayScoreEl = document.getElementById("away-score")
let homeScore = 0
let awayScore = 0

function incrementScore(team, score) {
    if (team === "home") {
        homeScore += score
        homeScoreEl.textContent = homeScore
    } else if (team === "away") {
        awayScore += score
        awayScoreEl.textContent = awayScore
    }
}

function newGame() {
    awayScoreEl.textContent = 0
    homeScoreEl.textContent = 0
}