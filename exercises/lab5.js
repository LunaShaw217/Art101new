function askNumber(whatNumber) { let userNumber = prompt("Guess 1-10?"); 
    if (userNumber == whatNumber) { 
        $("#output").html("You got it!");
    }
}