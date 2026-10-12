/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector("#message");
const squareEls = document.querySelectorAll(".sqr");

console.log(messageEl);
console.log(squareEls);
/*-------------------------------- Functions --------------------------------*/
function init() {
  console.log("function is called");

  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;

  render();
}

function render() {
  updateBoard();
  updateBoard();
}

function updateBoard() {
  board.forEach((cellVal, idx) => {
    squareEls[idx].textContent = cellVal;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It is ${turn}'s turn.`;
  } else if (winner === false && tie === true) {
    messageEl.textContent = `It's a tie!`;
  } else {
    messageEl.textContent = `Congrats! Player ${turn} wins!`;
  }
}

init();
/*----------------------------- Event Listeners -----------------------------*/
