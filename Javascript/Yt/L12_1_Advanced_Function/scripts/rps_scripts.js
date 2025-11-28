const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};
let isautoplay=false;
let intervalId;
function reset(){
  if(!isautoplay){
    isautoplay=true;
    intervalId=setInterval(function(){
      const playermove=findComputerMove();
      playMove(playermove);
    },1000);
    document.querySelector(".autoplay").classList.add("stopplay");
    document.querySelector(".autoplay").innerHTML="Stop Autoplay";
  }else{
    isautoplay=false;
     document.querySelector(".autoplay").classList.remove("stopplay");
    document.querySelector(".autoplay").innerHTML="Autoplay";
    clearInterval(intervalId);
  }
}
document.querySelector(
  ".score"
).innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
function playMove(playermove) {
  let computerMove = findComputerMove();
  let result = "";
  if (playermove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    } else {
      result = "You Lose.";
    }
  } else if (playermove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You win.";
    } else {
      result = "You Lose.";
    }
  } else if (playermove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else {
      result = "You Lose.";
    }
  }
  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.loses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }
  document.querySelector(".result").innerHTML = result;

  document.querySelector(
    ".comparsion"
  ).innerHTML = `You choosed <img class="shapes" src="./images/${playermove}-emoji.png" alt=""> <img class="shapes" src="./images/${computerMove}-emoji.png" alt=""> Computer `;

  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;

  localStorage.setItem("score", JSON.stringify(score));
  return;
}
function findComputerMove() {
  let random = Math.random();
  let computerMove = "";
  if (random >= 0 && random < 1 / 3) {
    computerMove = "rock";
  } else if (random >= 1 / 3 && random < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
