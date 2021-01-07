// Javascript that tells you if your age guess is correct, higher or lower.

let correctAge = 15 // Sets the correct answer to my real age.
alert("Dismiss this message to guess my age! You have 10 guesses!") // Starting alert, notifies user of the game.
let userGuess=prompt("What's your guess?")

for (i=0;i<10;i++) {
  if (userGuess == correctAge) {
    alert('That is Correct! Great Job! Refresh the page to play again.')
    break;
  } else if (userGuess <= correctAge) {
    userGuess=prompt('Your answer is incorrect, the correct answer is higher than that.')
  } else if (userGuess >= correctAge) {
    userGuess=prompt('Your answer is incorrect, the correct answer is lower than that.')
  } else {
    userGuess=prompt('Either your answer is not a number, or there is a bug.')
  }
}
