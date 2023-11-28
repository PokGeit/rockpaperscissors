//Constants
const CHOICE_ROCK = 0;
const CHOICE_PAPER = 1;
const CHOICE_SCISSORS = 2;

let games_played = 0;
let games_won = 0;
let games_lost = 0;
let games_tied = 0;

//Updates the score string
updateScoreString();


//Sets listeners to buttons
const buttons = document.querySelectorAll('.choiceButton');
buttons.forEach((button) => 
    button.addEventListener('click', onClickChoiceButton));


//Listener
function onClickChoiceButton()
{
    if(this.id >= 0 && this.id <= 2)
    {
        playRound(this.id, getComputerChoice());
    }
    return;
}

//Greys the buttons when the game is finished
function greyAllButtons()
{
    buttons.forEach((button) => 
    button.disabled = true);
}

//Converts choice ID to string
function returnChoiceString(choice)
{
    let str = "Undefined";
    if(choice == CHOICE_ROCK)
    {
        str = "Steen";
    }

    else if(choice == CHOICE_PAPER)
    {
        str = "Papier";
    }

    else
    {
        str = "Schaar";
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

    updateResultString(result, playerSelection, computerSelection);
    calculateScore(result);
    updateScoreString();
    return;
}

function updateResultString(result, playerSelection, computerSelection)
{
    let resultStr = "";

    switch (result)
    {
        case 0:
            resultStr = "Verloren! Jij koos "+returnChoiceString(playerSelection)+" terwijl de kip koos voor "+returnChoiceString(computerSelection);
            break;
        case 1:
            resultStr = "Gewonnen! Jij koos "+returnChoiceString(playerSelection)+" terwijl de kip koos voor "+returnChoiceString(computerSelection);
            break;
        case 2:
            resultStr = "Gelijkspel! Jij koos "+returnChoiceString(playerSelection)+" terwijl de kip koos voor "+returnChoiceString(computerSelection);
            break;
        default:
            resultStr = "An error occured and a winner could not be established.";
    }

    const textField = document.querySelector('#resultText');
    textField.textContent = resultStr;
    return;
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

function updateScoreString()
{
    let str = "";

    if(games_played > 0)
    {
        if(games_won >= 5)
        {
            str = "Gefeliciteerd! Jij won "+games_won+" keer en de kip won "+games_lost+" keer.";
            greyAllButtons();
        }
        else if(games_lost >= 5)
        {
            str = "Helaas! Jij won slechts "+games_won+" keer en de kip won "+games_lost+" keer.";
            greyAllButtons();
        }
        else
        {
            str = "Je hebt  "+games_played+" keer gespeeld. Jij won "+games_won+" keer en de kip won "+games_lost+" keer.";
        }
    }
    else{
        str = "Maak een keuze door op een knop te klikken.";
    }

    const textField = document.querySelector('#scoreText');
    textField.textContent = str;
}