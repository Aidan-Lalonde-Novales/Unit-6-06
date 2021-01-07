// Javascript that tells you if your age guess is correct, higher or lower.

const correctAge = 15 // Sets the correct answer to my real age.
let i = 0 // Defines the variable "i".
alert('Dismiss this message to guess my age! You have 10 guesses!') // Starting alert, notifies user of the game.
let userGuess = parseInt(prompt('What is your guess?')) // Asks the user for their guess.

for (i = 0; i < 10; i++) { // Loop that persists for 10 guesses.
  if (userGuess === correctAge) {
    alert('That is Correct! Great Job! Refresh the page to play again.') // Alerts the user when they get the correct answer.
    break // Stops the alerts.
  } else if (userGuess <= correctAge) {
    userGuess = parseInt(prompt('Your answer is incorrect, the correct answer is higher than that.')) // Alerts the user when their guess is too low.
  } else if (userGuess >= correctAge) {
    userGuess = parseInt(prompt('Your answer is incorrect, the correct answer is lower than that.')) // Alerts the user when their guess is too high.
  } else {
    userGuess = parseInt(prompt('Your answer is not a number.')) // Alerts the user when their guess isn't a valid number.
  }
}
