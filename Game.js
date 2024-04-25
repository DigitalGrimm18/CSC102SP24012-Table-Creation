function PlayCraps() {
    //PlayCraps() is a function used to simulate a craps game.
    console.log("PlayCraps() started");

    //rolls the dice.
    //This code allows the dice to generate random numbers ranging from 1-6.
    var die1 = 1 + Math.floor(6 * Math.random());
    console.log(die1);
    document.getElementById("die1res").innerHTML = die1;
    var die2 = Math.ceil(6 * Math.random());
    console.log(die2);
    document.getElementById("die2res").innerHTML = die2;

    //This  creates a set of conditions that lets me test the dice to see if they're working correctly .
    if (die1 < 1 || die1 > 6) 
    {
        console.log("Fails test, fix it!")
    }
    if (die2 < 1 || die2 > 6) 
    {
        console.log("Fails test, fix it!")
    }

    //Get the sum of the dice.
    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumres").innerHTML = sum;


    //if sum = 7 or 11 they lose.
    if (sum == 7 || sum == 11) 
    {
        document.getElementById("finres").innerHTML = "You lose, please try again."
    }
    //if the sum is doubles and even, then they win.
        else if (die1 == die2 && die1 % 2 == 0) 
        {
            document.getElementById("finres").innerHTML = "You Win!"
        }
        //if the sum is neither then it results in a draw.
        else
        {
            document.getElementById("finres").innerHTML = "Draw!"
        }
    


}