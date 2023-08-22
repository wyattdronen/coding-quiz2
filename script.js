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
var no = false;
// variables for multiple choice options
var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");
// variable for choice array
var choice = [A,B,C,D];
// variable for user answer chosen 
var userAnswer = [];
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
  
  startButton.addEventListener("click", function() {
    // Hide start button
  startButton.style.display = "none";},
  // Display first question
  startQuestions(),
  // Start timer
  timeRel = setInterval(function(){
    timerInt--;
    timer.textContent = timerInt;
  }
  )
)}
// Start questions
function startQuestions(){
  score = 0;
  currQuestion = 0;
  question.textContent = questions[currQuestion].question;
  displayAnswer(),
  checkAnswer(),
  nextQuestion()
}
// Display answer choices
function displayAnswer(){
  var answers = questions[currQuestion].choiceA + [] + questions[currQuestion].choiceB + [] + questions[currQuestion].choiceC + [] + questions[currQuestion].choiceD;
  choice.forEach(function(choice){
    choice.textContent = answers;
});
}
// Check answer
function checkAnswer(event){
  if(event.userAnswer.textContent === questions[currQuestion].answer){
  score++;
  scored.textContent = score;
}
}
// Next question
function nextQuestion(){
  if(questions.length === currQuestion){
    startQuestions()
  }
   else{ gameOver()}
}
// Game over function
function gameOver(){
  scored.textContent = score
  topScore.textContent = localStorage.getItem("topScore") || 0;
  saveScore()
}
 // Save score function
 function saveScore(){
  localStorage.setItem("topScore", Math.max(score, localStorage.getItem("topScore") || 0));
}


startQuiz()