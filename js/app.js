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
const resetBtnEl = document.querySelector("#reset");

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
  updateMessage();
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

function handleClick(event) {
  const squareIndex = event.target.id;

  if (board[squareIndex] !== "" || winner) {
    return;
  }
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function placePiece(index) {
  board[index] = turn;
  console.log(board);
}

function checkForWinner() {
  winningCombos.forEach((combo) => {
    const [a, b, c] = combo;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
    }
  });
  console.log("Winner: ", winner);
}

function checkForTie() {
  if (winner) {
    return;
  }
  if (!board.includes("")) {
    tie = true;
  }
  console.log("Tie: ", tie);
}

function switchPlayerTurn() {
  if (winner) {
    return;
  }
  turn = turn === "X" ? "O" : "X";

  console.log("Turn: ", turn);
}

init();
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((sequare) => {
  sequare.addEventListener("click", handleClick);
});

resetBtnEl.addEventListener("click", init);
