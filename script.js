// Get references to the problem container, feedback container, and start button
const problemContainer = document.querySelector('.problem-container');
const feedbackContainer = document.querySelector('.feedback-container');
const startButton = document.querySelector('.start-button');

// Generate a random multiplication problem and display it on the screen
function generateProblem() {
  // Generate two random numbers between 0 and 12
  const num1 = Math.floor(Math.random() * 13);
  const num2 = Math.floor(Math.random() * 13);

  // Display the problem on the screen
  problemContainer.textContent = `${num1} x ${num2} =`;

  // Clear the feedback container
  feedbackContainer.textContent = '';
}

// Start the game when the start button is clicked
startButton.addEventListener('click', function() {
  generateProblem();
});
