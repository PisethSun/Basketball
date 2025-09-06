let homeScores = 0 
let guestScores = 0
document.getElementById("homeScore").textContent=homeScores
document.getElementById("guestScore").textContent=guestScores


let home = document.getElementById("homeScore")
let guest = document.getElementById("guestScore")


// home one function
function addOne(){

    homeScores += 1

    home.textContent = homeScores

}

function addTwo(){

      homeScores += 2

    home.textContent = homeScores
}

function addThree(){
     homeScores += 3

    home.textContent = homeScores

}


// Guest ScORE



// home one function
function addoneGuest(){

    guestScores += 1

    guest.textContent = guestScores

}

function addtwoGuest(){

      guestScores += 2

    guest.textContent = guestScores
}

function addthreeGuest(){
     guestScores += 3

    guest.textContent = guestScores
}


function resetHome() {
    homeScores = 0;
   
    home.textContent = homeScores;
}

function resetGuest(){
     guestScores = 0;

    guest.textContent = guestScores;
}
