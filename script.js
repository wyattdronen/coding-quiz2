//variables for scoring
var score = 0;
var scored = document.querySelector("#score");
var topScore = document.querySelector("#topScore");
// variable for timer
var timer = document.querySelector("#timer");
var timerView
var timeLeft = 60;
var answer;
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
var currQuestion = 0;
let questions = [
  {
    q: "What is 2 + 2?",
    index: ["2","4","6","5"],
    answer: ["4"]
  },
  {
    q: "What is 10 - 5?",
    index: ["7","5","12","15"],
    answer: ["5"]
  },
  {
    q: "what is 7 * 3",
    index:["20","14","17","21"],
    answer: ["21"]
  },
]
  var saveScore = document.querySelector("#saveScore");
// Start quiz function
function startQuiz() {
  
  startButton.addEventListener("click", function(){
    // start timer and questions
    startTimer();
    startQuestions();
    // start button disappers
    startButton.style.display = "none";
  }
)}
// Start timer
function startTimer() {
  let timeLeft = 60;

  const timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      document.getElementById('timer').textContent = timeLeft;
      console.log(`${timeLeft} seconds remaining`);
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      document.getElementById('timer').textContent = 'Times up!';
      console.log('Timer finished!');
    }
  }, 1000);
}
// Start questions
function startQuestions() {
  question.textContent = questions[currQuestion].q;
  for(let i = 0; i < questions[currQuestion].index.length; i++) {
    choice[i].textContent = questions[currQuestion].index[i];
  }
// Handle click events
for(let i = 0; i < choice.length; i++) {
  choice[i].addEventListener("click", function() {
  console.log('check')
  // Get the index of the clicked option
  let index = parseInt(this.id.slice(-1));
  // Check if answer is correct
  if(questions[currQuestion].answer===(questions[currQuestion].index[index])) {

    // Increment score if correct
    score++;
    scored.textContent = score;
    document.getElementById("feedback").textContent = "Correct!";
    console.log('Correct!');
  } else {
    document.getElementById("feedback").textContent = "Incorrect!";
    console.log('Wrong!');
    //Reduce time if incorrect
    timeLeft -= 10;
  }
  // Increment question number
  currQuestion++;
  // Check if there are more questions
  if(currQuestion < questions.length) {
    // If so, call next question
    startQuestions();
  } else {
    // If not, call end quiz
    endQuiz();
  }
})}
}
// End quiz function
function endQuiz() {
  // Stop timer
  clearInterval(timerInterval);
  // Show final score
  document.getElementById('feedback').textContent = getScore.value;
  // Save top score if higher
  if(score > topScore) {
    topScore.textContent = score;
  }
  // Save button click handler
  saveScore.addEventListener('click', function() {
    // Get initials from input
    let initials = document.getElementById('initials').value;
    // Save score
    let scores = {
      initials: initials,
      score: score
    }
    // Save to localStorage
    localStorage.setItem(initials, JSON.stringify(scores));
  })
}
// Get score from localStroage
function getScore() {
  let highScores = JSON.parse(localStorage.getItem('scores')) || [];
  highScores.sort((a,b) => {
    return b.score - a.score
    })

    let top3 = highScores.slice(0,3);

    let html = `<h2>Top 3 Scores</h2>`;

    top3.forEach(score => {
      html += `<p>${score.initials} - ${score.score}</p>`
    });

    document.getElementById('highScores').innerHTML = html;
  }

 
 

startQuiz()