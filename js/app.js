/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector("#message");
const squareEls = document.querySelector(".sqr");

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
/*----------------------------- Event Listeners -----------------------------*/
