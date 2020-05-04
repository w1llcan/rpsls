let name = prompt('What is your name?','Player');
name = name.charAt(0).toUpperCase() + name.slice(1);
let numOfRounds = prompt('How many rounds should we play?',11);
let numRounds = (numOfRounds != 0) ? numOfRounds : 11;
// console.log(name); // verified name returns
// console.log(num); // verified either entered num or 11 is set
// console.log(numOfRounds); // verified number of rounds returned correcly
alert('Good luck, ' + name.charAt(0).toUpperCase() + name.slice(1) + '! ' + '\n\nWe are playing ' + numRounds + ' rounds.');
let playerScore = 0;
let computerScore = 0;
let currRound = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector("scoreboard");
const result_p = document.querySelector(".result >p");
const player_label_div = document.querySelector("#player-label");
const round_label_div = document.getElementById("round-label");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const getPlayerName = () => {
  player_label_div.innerHTML = `${name}`;
}

const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * choices.length); 
  return choices[randomNumber];
}

const winRound = (playerChoice, computerChoice) => {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  const colorPlayerWord = name.fontcolor("green");
  const colorMyWord = " MY choice was ".fontcolor("#00ff55");
  const playerWinsHand = " wins! ".fontsize(6).fontcolor("#3300ff");
  result_p.innerHTML = `${colorPlayerWord}${playerWinsHand}  ${colorMyWord} ${playerChoice} and the computer chose ${computerChoice}.`;
  player_label_div.innerHTML = `${name}`;
  currRound++;
  round_label_div.innerHTML = `Round: ${currRound} / ${numRounds}`
}
// Not working yet, will work on it later
// const playerLabel = () => {
//   if (this.name.length > 6 && name.length < 10)
//   $('#player-label').css('left', '-65px')
//   else if (this.name.length > 10 && name.length < 15)
//   $('#player-label').css('left', '-75px')
// }



const loseRound = (playerChoice, computerChoice) => {
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  const colorCompWord = " computer ".fontcolor("#006600");
  result_p.innerHTML = `The ${colorCompWord} wins! The computer chose ${computerChoice} and my choice was ${playerChoice}...`;
  player_label_div.innerHTML = `${name}`;
  currRound++;
  round_label_div.innerHTML = `Round: ${currRound} / ${numRounds}`
}

const draw = (playerChoice, computerChoice) => {
  const colorDrawWord = " It's a tie! ".fontcolor("#ff4000");
  result_p.innerHTML = `${colorDrawWord}  The computer and I both chose ${computerChoice}.`;
  player_label_div.innerHTML = `${name}`;
  currRound++;
  round_label_div.innerHTML = `Round: ${currRound} / ${numRounds}`
}

const game = (playerChoice) => {
  const computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      winRound(playerChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      loseROund(playerChoice, computerChoice);
    break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(playerChoice, computerChoice);
    break;
  }
}

const main = () => {
  rock_div.addEventListener('click', function() {
    game("Rock");
  })
  paper_div.addEventListener('click', function() {
    game("Paper");
  })
  scissors_div.addEventListener('click', function() {
    game("Scissors");
  })
}

main();
