// Get the HTML elements we'll need
const countdownEl = document.getElementById('countdown');
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const userAnswerEl = document.getElementById('user-answer');
const submitBtn = document.getElementById('submit-answer');

// Set the initial time
let timeLeft = 120;

// Function to generate random numbers between 1 and 9
function generateRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

// Function to display the multiplication problem
function displayProblem() {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  num1El.innerText = num1;
  num2El.innerText = num2;
}

// Function to check the user's answer and update the score
function checkAnswer() {
  const userAnswer = userAnswerEl.value;
  const num1 = parseInt(num1El.innerText);
  const num2 = parseInt(num2El.innerText);
  const correctAnswer = num1 * num2;
  if (userAnswer === "") {
    alert("Please enter an answer!");
  } else if (parseInt(userAnswer) === correctAnswer) {
    alert("Correct!");
    // TODO: update the score
    displayProblem();
    userAnswerEl.value = "";
  } else {
    alert("Incorrect! Try again.");
  }
}

// Function to update the countdown timer
function updateTimer() {
  timeLeft--;
  countdownEl.innerText = timeLeft;
  if (timeLeft === 0) {
    // TODO: end the game
    clearInterval(timerInterval);
  }
}

// Display the first multiplication problem
displayProblem();

// Add event listener to submit button
submitBtn.addEventListener('click', checkAnswer);

// Start the countdown timer
const timerInterval = setInterval(updateTimer, 1000);
