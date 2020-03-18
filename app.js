let selections = ['rock', 'paper', 'scissors'];

let winCount = 0;
let loseCount = 0;
let tieCount = 0;

let winCombo = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock'
}

// NOTE This function triggers after the user selects a button and checks if the game is a win or lose
// Invokes display & update score functions
function play(selection) {
  let pc = winCheck(selection);
  drawWinCount();
  drawLoseCount();
  drawCount();
  displaySelections(selection, pc)
}

// NOTE displaySelections shows the user selection and computer selections in the document
function displaySelections(user, pc) {
  let userSelection = document.getElementById('User-Selection');
  let compSelection = document.getElementById('Comp-Selection');

  userSelection.innerText = user;
  compSelection.innerText = pc;
}

function drawCount() {
  let tieCountElement = document.getElementById('tieCount')
  tieCountElement.innerText = tieCount.toString();
}

function drawWinCount() {
  let winCountElement = document.getElementById('winCount')
  winCountElement.innerText = winCount.toString();
}

function drawLoseCount() {
  let loseCountElem = document.getElementById('loseCount');
  loseCountElem.innerText = loseCount.toString();
}

// NOTE Returns a random selected item from the Selections Array
function randomSelection() {
  let randomSelection = selections[Math.floor(Math.random() * selections.length)];
  return randomSelection;
}

// NOTE Invoked when the user selects a game button and compares to the randomSelection. 
// checks to see if the combo is apart of the win combo
function winCheck(userSelection) {
  let computerSelection = randomSelection();
  if (winCombo[userSelection] == computerSelection) {
    winCount++;
  } else if (userSelection == computerSelection) {
    tieCount++;
  } else {
    loseCount++;
  }
  return computerSelection;
}

