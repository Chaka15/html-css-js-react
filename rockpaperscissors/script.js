//New Game button for starting a game
document.getElementById("newgame-btn").addEventListener("click", init);
//Variables
var humanChoice, botChoice, choices, decideWinner, h1, gamePlaying;
choices = ["rock", "paper", "scissors"];

function rps(yourChoice) {
  humanChoice = yourChoice.id;
  botChoice = choices[Math.floor(Math.random() * choices.length)];
  h1 = document.createElement("h1");
  var textAnswer;
  document.getElementById("flex-box-cont-div").appendChild(h1);
  function decideWinner(choiceH, choiceB) {
    if (humanChoice === botChoice) {
      remove();
      displayChosen();
      textAnswer = document.createTextNode("Tied!");
      h1.appendChild(textAnswer);
      h1.style.color = "gray";
    } else if (
      (humanChoice === "paper" && botChoice === "rock") ||
      (humanChoice === "rock" && botChoice === "scissors") ||
      (humanChoice === "scissors" && botChoice === "paper")
    ) {
      remove();
      displayChosen();
      textAnswer = document.createTextNode("You won!");
      h1.appendChild(textAnswer);
      h1.style.color = "green";
    } else {
      remove();
      displayChosen();
      textAnswer = document.createTextNode("You lost!");
      h1.appendChild(textAnswer);
      h1.style.color = "crimson";
    }
  }
  decideWinner(humanChoice, botChoice);

  function displayChosen() {
    var img1 = document.getElementById(humanChoice);
    img1.style.display = "block";
    var img2 = document.getElementById(botChoice);
    img2.style.display = "block";
    img1.style.order = 1;
    img2.style.order = 3;
  }
}

//Function that removes images
function remove() {
  document.getElementById("rock").style.display = "none";
  document.getElementById("paper").style.display = "none";
  document.getElementById("scissors").style.display = "none";
}

//Function used on clicking New Game button,init function
function init() {
  document.getElementById("rock").style.display = "initial";
  document.getElementById("paper").style.display = "initial";
  document.getElementById("scissors").style.display = "initial";
  document.getElementById("rock").style.order = 1;
  document.getElementById("paper").style.order = 2;
  document.getElementById("scissors").style.order = 3;
  h1.style.display = "none";
}

//Problems:
//1.End of the game
//2.Not displaying two images when is tied
