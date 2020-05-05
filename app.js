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
const computer_label_div = document.querySelector('#computer-label');
const round_label_div = document.getElementById("round-label");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

const getPlayerName = () => {
  player_label_div.innerHTML = `${name}`;
}

const getComputerChoice = () => {
  const choices = ['Rock', 'Paper','Scissors', 'Lizard', 'Spock'];
  const randomNumber = Math.floor(Math.random() * choices.length); 
  return choices[randomNumber];
}

const winRound = (playerChoice, computerChoice) => {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  const colorMyWord = `${name}: `.fontcolor("#c9b31e");
  const playerWinsHand = " wins! ".fontcolor("#3300ff");
  result_p.innerHTML = `${colorMyWord}${playerWinsHand} <br> ${colorMyWord} ${playerChoice}<br> Computer: ${computerChoice}.`;
  player_label_div.innerHTML = `${name}`;
  currRound++;
  round_label_div.innerHTML = `Round: ${currRound} / ${numRounds}`;
}


const loseRound = (playerChoice, computerChoice) => {
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  const colorCompWord = " Computer".fontcolor("#c9b31e");
  result_p.innerHTML = `The ${colorCompWord} wins!<br> ${colorCompWord}: ${computerChoice}<br> ${name}: ${playerChoice}`
  currRound++;
  round_label_div.innerHTML = `Round: ${currRound} / ${numRounds}`;
}

const draw = (playerChoice, computerChoice) => {
  const colorDrawWord = `It's a tie!`.fontcolor("#ff4000");
  result_p.innerHTML = `${colorDrawWord}<br>${name}: ${playerChoice}<br>Computer: ${computerChoice}`;
  player_label_div.innerHTML = `${name}`;
  currRound++;
  round_label_div.innerHTML = `Round: ${currRound} / ${numRounds}`;
}



const game = (playerChoice) => {
  const computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case "ScissorsPaper":
    case "ScissorsLizard":
    case "PaperRock":
    case "PaperSpock":
    case "RockScissors":
    case "RockLizard":
    case "LizardPaper":
    case "LizardSpock":
    case "SpockScissors":
    case "SpockRock":
      winRound(playerChoice, computerChoice);
      break;
    case "ScissorsRock":
    case "ScissorsSpock":
    case "PaperScissors":
    case "PaperLizard":
    case "RockPaper":
    case "RockSpock":
    case "LizardScissors":
    case "LizardRock":
    case "SpockPaper":
    case "SpockLizard":
      loseRound(playerChoice, computerChoice);
    break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
    case "LizardLizard":
    case "SpockSpock":
      draw(playerChoice, computerChoice);
    break;
  }
}

const setEndRounds = () => {
  let endPlays;


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
  lizard_div.addEventListener('click', function() {
    game("Lizard");
  })
  spock_div.addEventListener('click', function() {
    game("Spock");
  })
}

main();