const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
let homeSum = 0
let guestSum = 0

// HOME FUNCTIONS
function plusOneHome() {
    homeSum++
    homeScore.textContent = homeSum
}

function plusTwoHome() {
    homeSum += 2
    homeScore.textContent = homeSum
}

function plusThreeHome() {
    homeSum += 3
    homeScore.textContent = homeSum
}

// GUEST FUNCTIONS
function plusOneGuest() {
    guestSum++
    guestScore.textContent = guestSum
}

function plusTwoGuest() {
    guestSum += 2
    guestScore.textContent = guestSum
}

function plusThreeGuest() {
    guestSum += 3
    guestScore.textContent = guestSum
}

function newGame() {
    homeSum = 0
    guestSum = 0
    guestScore.textContent = guestSum
    homeScore.textContent = homeSum
}