let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0


function oneHome() {
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function twoHome() {
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function threeHome() {
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function oneGuest() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function twoGuest() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}

function threeGuest() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}