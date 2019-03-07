var number = 8;
var userGuess = (prompt("Guess the number: "));
var userGuess = Number(userGuess);

while (userGuess !== number) {
   
    if (userGuess === number) {
        break;
    }
    else if (userGuess > number) {
        alert("too high");
    }
   
    else {
        alert("too low");
    }
    var userGuess = prompt("Guess the number: ");
}

alert("you guessed it!!!");