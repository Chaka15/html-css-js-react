let circleTurn;
let circleCLass = "circle";
let xClass = "x";
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
const board = document.getElementById("board");
const restartBtn = document.getElementById("restartBtn");
const winText = document.getElementById("text");
const cellElements = document.querySelectorAll(".cell");

startGame();
function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(circleCLass);
    cell.classList.remove(xClass);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHover();
  winText.textContent = "";
}
restartBtn.addEventListener("click", startGame);

//Functions
function handleClick(e) {
  //Add X or O
  const cell = e.target;
  const currentClass = circleTurn ? circleCLass : xClass;
  placeMark(cell, currentClass);
  //Check for win
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (checkDraw()) {
    endGame(true);
  } else {
    switchTurn();
    setBoardHover();
  }
}

function placeMark(cell, curClass) {
  cell.classList.add(curClass);
}
function switchTurn() {
  circleTurn = !circleTurn;
}
function setBoardHover() {
  board.classList.remove("x");
  board.classList.remove("circle");
  if (circleTurn) {
    board.classList.add(circleCLass);
  } else {
    board.classList.add(xClass);
  }
}

function checkWin(currentClass) {
  return winCombinations.some((el) => {
    return el.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function endGame(draw) {
  if (draw) {
    winText.textContent = "Draw.";
  } else {
    winText.textContent = `${circleTurn ? "O's" : "X's"} have won!`;
  }
}
function checkDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(xClass) || cell.classList.contains(circleCLass)
    );
  });
}
