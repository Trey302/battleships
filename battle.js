var location1 = 4;
var location2 = 6;
var location3 = 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// while (isSunk == false){
//     guess = prompt("Ready, aim, fire! (enter a number from 0-6):")

//     if (guess < 0 || guess > 6) {
//         alert("Please enter a valid cell number!");
//     } else {
//         guesses = guesses + 1; 
//         }

//     if (guess == location1 || guess == location2 || guess == location3) { 
//             alert("HIT!");
//             hits = hits + 1; 
//                 if (hits == 3) {
//                     isSunk = true;
//                     alert("You sank my battleship!"); 
//                 }
//     }   else {
//             alert("MISS");
//          }
// }

//     var stats = "You took " + guesses + " guesses to sink the battleship, " +
//     "which means your shooting accuracy was " + (3/guesses); 
//     alert(stats);







while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):")

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }

    if (guess == loactioncell1 || guess == loactioncell2 || guess == loactioncell3) {
        alert("HIT!");
        hits = hits + 1;
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }
        else if (MISS == 3) {
            isSunk = false;
            alert("You Didn't Sink My Battleship!")
        }
    } else {
        alert("MISS");
        missess = missess + 1;
    }
    while (isSunk == false)
        prompt("You failed to sink my battleship, type play again if you want to play again.")
}    
        var stats = "You took " + guesses + " guesses to sink the battleship, " +
        "which means your shooting accuracy was " + (3 / guesses);
        alert(stats);


// function gamestate() {
// var GameOver;
// var Restartgame

// GameOver = document.getElementById("Game Over");

// RestartButton = document.getElementById("Restart game");
// RestartButton.addEventListener("click", Restartgame);

// setState("PLAY");
// }


// function Restartgame() {
// setState("PLAY");
// }