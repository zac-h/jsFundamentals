//computerPlay: create a function that will randomly return either 'Rock', 'Paper' or 'Scissors'
//write a function called 'getRandomInt' that generates a random number between 0 and 2 and stores that value in variable randomNumber
//write a function that compares value of 'getRandomInt' with 0, 1 and 2 and returns 'Rock' if 0, 'Paper' if 1, 'Scissors' if 2

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function computerPlay(){
    const value = getRandomInt(3);

    if (value == 0){
        return 'rock';
    } else if (value == 1) {
        return  'paper';
    } else {
        return 'scissors';
    }
}

//write a function the plays a single game of rock paper scissors
//the function should take two parameter: playerSelection (input by player) and computerSelection (value from computerPlay function) and then retrun a string that declares the winner of the round.
//The function should be case-INSENSITIVE so the user can enter rock, ROCK, RoCK.

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        result = 'Tie!';
    }else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            result = 'You Lose! Paper beats rock.';
            computer ++;
        } else if(computerSelection == 'scissors'){
            result = 'You Win! Rock beats scissors.';
            player ++;
        }
    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            result = 'You Win! Paper beats rock.';
            player ++;
        } else if(computerSelection == 'scissors'){
            result = 'You Lose! Scissors beats paper.';
            computer ++;
        }
    }else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            result = 'You Lose! Rock beats scissors.';
            computer ++;
        } else if(computerSelection == 'paper'){
            result = 'You Win! Scissors beats paper.';
            player ++;
        }
    }else{
        result = 'Invalid entry, try again.'
    }
    console.log(result);
}

/*const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))*/


//write a function called game
//this function calls the playRound function 5 times  and records the score of the winner

function game(n){

    for(i=0; i<n; i++){
        let playerSelection = prompt('rock, paper or scissors?');
        playRound(playerSelection, computerPlay());
    }

    console.log(player);
    console.log(computer);
    if(player>computer){
        console.log('You win!');
    } else if(player<computer){
        console.log('You lose!');
    } else {
        console.log('It\'s a tie!');
    }
}

let player = 0;
let computer = 0;
let numberOfGames = prompt('How many games?');
game(numberOfGames);
