// rock, paper, or scissors

// three choices for both you and computer
const roshambo = ['ROCK', 'PAPER', 'SCISSORS']

// if you choose SCISSORS and computer choose ROCK - COMPUTER wins
// 1 point added to computer's score

// if you choose ROCK and computer choose PAPER - COMPUTER wins
// 1 point added to computer's score

// if you choose PAPER and computer choose SCISSORS - COMPUTER wins
// 1 point added to computer's score

function computerPlay(){
    let computer = Math.floor(Math.random() * roshambo.length);
    // let computer = roshambo.indexOf('SCISSORS');
    return(computer);
}

// if you choose ROCK and computer choose SCISSORS - YOU win
// 1 point added to your score

// if you choose PAPER and computer choose ROCK - YOU win
// 1 point added to your score

// if you choose SCISSORS and computer choose PAPER - YOU win
// 1 point added to your score

function playerPlay(){
    let playerChoice = prompt(roshambo.join(' - ') + ' !');
    let player = roshambo.indexOf(playerChoice.toUpperCase());
    return(player);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 0 && computerSelection == 2){
        console.log('You win! Rock beats Scissors. Humanity has found it\s saviour!');
        playerScore++;
    } else if(playerSelection == 1 && computerSelection == 0){
        console.log('You win! Paper beats Rock. Humanity has found it\s saviour!');
        playerScore++;
    } else if(playerSelection == 2 && computerSelection == 1){
        console.log('You win! Scissors beats Paper. Humanity has found it\s saviour!');
        playerScore++;
    } else if(playerSelection == 2 && computerSelection == 0){
        console.log('AI is winning. You lost! Rock beats Scissors.');
        computerScore++;
    } else if(playerSelection == 0 && computerSelection == 1){
        console.log('AI is winning. You lost! Paper beats Rock.');
        computerScore++;
    } else if(playerSelection == 1 && computerSelection == 2){
        console.log('AI is winning. You lost! Scissors beats Paper.');
        computerScore++;
    } else{
        console.log('It\'s a TIE.')
    }
}
// if you and computer choose the same - TIE


// default scores for both YOU and COMPUTER is 0
let playerScore = 0;
let computerScore = 0;

// play 5 times, whoever wins the most is the winner
// after 5 attempts, whoever has more points wins


function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        playRound( playerSelection, computerSelection );
    }
    if (playerScore > computerScore) {
        console.log(`You won by ${playerScore} rounds. You are the Champion!`);
    } else if (playerScore == computerScore) {
        console.log(`Match is TIED.`);
    } else {
        console.log(`You lost by ${computerScore} rounds. You are a looser!`);
    }
}

game();

