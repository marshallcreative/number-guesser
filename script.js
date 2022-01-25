let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


  /*/ RANDOM NUMBER /*/

function generateTarget () {
  return Math.floor(Math.random() * 9) + 1;
}
// console.log(generateTarget()); // TESTING //


  /*/ COMPARE GUESS  /*/

function compareGuesses(humanGuess, computerGuess, secretTargetNumber) {

  /*  // TESTING // 
  console.log('computer ' + computerGuess);
  console.log('human ' + humanGuess);
  console.log('secret ' + secretTargetNumber);

  console.log('math computer ' + Math.abs(computerGuess - secretTargetNumber));
  console.log('math human ' + Math.abs(humanGuess - secretTargetNumber));
  */ 

  if (computerGuess === humanGuess) {
    return true 
  } else if (Math.abs(humanGuess - secretTargetNumber) > Math.abs(computerGuess - secretTargetNumber)) {
    return false; 
  } else {
    return true;
  }
};

//console.log('outcome ' + compareGuesses(1,2,9)); // TESTING //
//console.log('outcome ' + compareGuesses(5,2,9)); // TESTING //
//console.log('outcome ' + compareGuesses(5,5,9)); // TESTING //


/*/ UPDATE SCORE /*/

function updateScore (winner) {
  if (winner === 'human') {
    humanScore += 1;
  }
  if (winner === 'computer') {
    computerScore += 1;
  }
};

//console.log(updateScore('human')); // TESTING //
//console.log(humanScore); // TESTING //


/*/ ADVANCE ROUND /*/

function advanceRound () {
  currentRoundNumber += 1;
}

//console.log(advanceRound()); // TESTING //
//console.log(currentRoundNumber); // TESTING //