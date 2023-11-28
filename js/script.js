//Constants
const CHOICE_ROCK = 0;
const CHOICE_PAPER = 1;
const CHOICE_SCISSORS = 2;

//Converts choice ID to string
returnChoiceString(choice)
{
    let str = "Undefined";
    if(choice == CHOICE_ROCK)
    {
        str = "Rock";
    }

    else if(choice == CHOICE_PAPER)
    {
        str = "Paper";
    }

    else
    {
        str = "Scissors";
    }
    return str;
}

//Calculates computer choice
getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

//Calculates the winner
playRound(playerSelection, computerSelection)
{
    /*
        Result ID:
        0 = lose
        1 = win
        2 = tie
        3 = undefined
    */
    let result = 3;
    let resultStr = "";
    let resultArray[0, ""];

    if(playerSelection == CHOICE_ROCK)
    {
        if(getComputerChoice == CHOICE_ROCK)
        {
            result = 2;
        }
        else if(getComputerChoice == CHOICE_PAPER)
        {
            result = 0;
        }
        else if(getComputerChoice == CHOICE_SCISSORS)
        {
            result = 1;
        }
    }

    else if(playerSelection == CHOICE_PAPER)
    {
        if(getComputerChoice == CHOICE_ROCK)
        {
            result = 1;
        }
        else if(getComputerChoice == CHOICE_PAPER)
        {
            result = 2;
        }
        else if(getComputerChoice == CHOICE_SCISSORS)
        {
            result = 0;
        }
    }

    else if(playerSelection = CHOICE_SCISSORS)
    {
        if(getComputerChoice == CHOICE_ROCK)
        {
            result = 0;
        }
        else if(getComputerChoice == CHOICE_PAPER)
        {
            result = 1;
        }
        else if(getComputerChoice == CHOICE_SCISSORS)
        {
            result = 2;
        }
    }

    //Determine result string
    switch (result)
    {
        case 0:
            resultStr = "You lost! You chose "+returnChoiceString(playerSelection)+" while computer chose "+returnChoiceString(computerSelection);
        case 1:
            resultStr = "You won! You chose "+returnChoiceString(playerSelection)+" while computer chose "+returnChoiceString(computerSelection);
        case 2:
            resultStr = "It's a tie! You chose "+returnChoiceString(playerSelection)+" while computer chose "+returnChoiceString(computerSelection);
        default:
            resultStr = "An error occured and a winner could not be established.";

    }
    resultArray = [result, resultStr];
    return resultArray;
}