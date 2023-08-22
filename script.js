//variables for scoring
var score = 0;
var scored = document.querySelector("#score");
var topScore = document.querySelector("#topScore");
// variable for timer
var timer = document.querySelector("#timer");
// variables for questions
var question = document.querySelector("#question");
// variables for start quiz
var startButton = document.querySelector("#startButton");
// variables for multiple choice options
var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");
// variable for choice array
var choice = [A,B,C,D];
// variable for user answer chosen 
var userAnswer = "";
// variable for timer interval
var timerInt = 6000;
var timeRel;
var currQuestion = 0;
var questions = [
  {
    question: "What is 2 + 2?",
    choiceA: "2",
    choiceB: "4",
    choiceC: "6",
    choiceD: "8",
    answer: "B"
  },
  {
    question: "What is 10 - 5?",
    choiceA: "5",
    choiceB: "7",
    choiceC: "12",
    choiceD: "15",
    answer: "A"
  }]
  var saveScore = document.querySelector("#saveScore");
// Start quiz function
function startQuiz() {

  // Set timer interval
  timeRel = setInterval(function() {
    timerInt--;
    timer.textContent = timerInt;
    if(timerInt === 0) {
      clearInterval(timeRel);
      endQuiz();
    }
  }, 1000);
  // Display first question
  showQuestion(0);
  // Start button click handler
  startButton.addEventListener("click", function() {
    // Hide start button
  startButton.style.display = "none";
})
};
// Function to show question

