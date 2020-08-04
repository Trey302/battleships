function myFunction() {
    var txt;
    var person = prompt("Please Give Us Feedback:", "Thanks");
    if (person == null || person == "") {
      txt = "Maybe Later.";
    } else {
      txt = " " + person + "For The Feedback";
    }
    document.getElementById("battle").battle.html = txt;
  }
    
var loactioncell1 = 3;
var loactioncell2 = 6;
var loactioncell3 = 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):")

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1; 
        }

    if (guess = loactioncell1 || guess == loactioncell2 || guess == loactioncell3) { 
            alert("HIT!");
            hits = hits + 1; 
                if (hits == loactioncell1) {
                    isSunk = true;
                    alert("You sank my battleship!"); 
                }
    }   else {
            alert("MISS");
         }
}

    var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses); 
    alert(stats);

