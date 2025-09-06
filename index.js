let homeScores = 0;
let guestScores = 0;

let home = document.getElementById("homeScore");
let guest = document.getElementById("guestScore");

// HOME FUNCTIONS
function addOne() {
    homeScores += 1;
    home.textContent = homeScores;
}

function addTwo() {
    homeScores += 2;
    home.textContent = homeScores;
}

function addThree() {
    homeScores += 3;
    home.textContent = homeScores;
}

function resetHome() {
    homeScores = 0;
    home.textContent = homeScores;
}

// GUEST FUNCTIONS
function addOneGuest() {
    guestScores += 1;
    guest.textContent = guestScores;
}

function addTwoGuest() {
    guestScores += 2;
    guest.textContent = guestScores;
}

function addThreeGuest() {
    guestScores += 3;
    guest.textContent = guestScores;
}

function resetGuest() {
    guestScores = 0;
    guest.textContent = guestScores;
}
