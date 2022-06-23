// rock, paper, or scissors

// default scores for both YOU and COMPUTER is 0
let playerScore;
let computerScore;

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
    let player = prompt(roshambo.join(' - ') + ' !');
    return(player.toUpperCase());
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'ROCK' && computerSelection == 2){
        console.log('You win! Rock beats Scissors.')
    } else if(playerSelection == 'PAPER' && computerSelection == 0){
        console.log('You win! Paper beats Rock.')
    } else if(playerSelection == 'SCISSORS' && computerSelection == 1){
        console.log('You win! Scissors beats Paper.')
    } else if(playerSelection == 'SCISSORS' && computerSelection == 0){
        console.log('You lost! Rock beats Scissors.')
    } else if(playerSelection == 'ROCK' && computerSelection == 1){
        console.log('You lost! Paper beats Rock.')
    } else if(playerSelection == 'PAPER' && computerSelection == 2){
        console.log('You lost! Scissors beats Paper.')
    }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
// if you and computer choose the same - TIE

// play 3 times, whoever wins the most is the winner
// after 3 attempts, whoever has more points wins

