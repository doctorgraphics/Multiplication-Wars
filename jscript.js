// Get references to the problem container and feedback container
const problemContainer = document.querySelector('.problem-container');
const feedbackContainer = document.querySelector('.feedback-container');

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

// Call the generateProblem function when the page loads
window.addEventListener('load', generateProblem);
