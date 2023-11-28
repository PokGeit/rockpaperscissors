//Constants
const CHOICE_ROCK = 0;
const CHOICE_PAPER = 1;
const CHOICE_SCISSORS = 2;

let games_played = 0;
let games_won = 0;
let games_lost = 0;
let games_tied = 0;

while(games_won < 3 && games_lost < 3)
{
    runGame();
}

//Converts choice ID to string
function returnChoiceString(choice)
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
function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

//Calculates the winner
function playRound(playerSelection, computerSelection)
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
    let resultArray = [];

    if(playerSelection == CHOICE_ROCK)
    {
        if(computerSelection == CHOICE_ROCK)
        {
            result = 2;
        }
        else if(computerSelection == CHOICE_PAPER)
        {
            result = 0;
        }
        else if(computerSelection == CHOICE_SCISSORS)
        {
            result = 1;
        }
    }

    else if(playerSelection == CHOICE_PAPER)
    {
        if(computerSelection == CHOICE_ROCK)
        {
            result = 1;
        }
        else if(computerSelection == CHOICE_PAPER)
        {
            result = 2;
        }
        else if(computerSelection == CHOICE_SCISSORS)
        {
            result = 0;
        }
    }

    else if(playerSelection = CHOICE_SCISSORS)
    {
        if(computerSelection == CHOICE_ROCK)
        {
            result = 0;
        }
        else if(computerSelection == CHOICE_PAPER)
        {
            result = 1;
        }
        else if(computerSelection == CHOICE_SCISSORS)
        {
            result = 2;
        }
    }

    //Determine result string
    switch (result)
    {
        case 0:
            resultStr = "You lost! You chose "+returnChoiceString(playerSelection)+" while computer chose "+returnChoiceString(computerSelection);
            break;
        case 1:
            resultStr = "You won! You chose "+returnChoiceString(playerSelection)+" while computer chose "+returnChoiceString(computerSelection);
            break;
        case 2:
            resultStr = "It's a tie! You chose "+returnChoiceString(playerSelection)+" while computer chose "+returnChoiceString(computerSelection);
            break;
        default:
            resultStr = "An error occured and a winner could not be established.";
            resultStr = "It's an error! You chose "+returnChoiceString(playerSelection)+" while computer chose "+returnChoiceString(computerSelection);

    }
    resultArray = [result, resultStr];
    return resultArray;
}

function runGame()
{
    let playerChoiceStr = prompt("Rock, paper or scissors?");
    let playerChoiceStrLower = playerChoiceStr.toLowerCase();
    let choiceNumber = 4;
    let result = -1;

    if(playerChoiceStrLower == "rock")
    {
        choiceNumber = CHOICE_ROCK;
    }
    else if(playerChoiceStrLower == "paper")
    {
        choiceNumber = CHOICE_PAPER;
    }
    else if(playerChoiceStrLower == "scissors")
    {
        choiceNumber = CHOICE_SCISSORS;
    }

    //invalid choice
    if(choiceNumber == 4)
    {
        alert("Invalid choice. Please pick rock, paper or scissors.");
    }
    else
    {
        result = playRound(choiceNumber, getComputerChoice());
        console.log(result[1]);
        calculateScore(result[0]);
    }
    
}

function calculateScore(result)
{
    /*
        Result ID:
        0 = lose
        1 = win
        2 = tie
        3 = undefined
    */

    if(result == 0)
    {
        games_lost ++;
    }
    else if(result == 1)
    {
        games_won ++;
    }
    else if (result == 2)
    {
        games_tied ++;
    }
    games_played ++;

    let str = "You have played "+games_played+" games. You won "+games_won+" times and lost "+games_lost+" times.";
    console.log(str);
}