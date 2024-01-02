let startButton = document.querySelector(".startButton");
let hideHeader = document.querySelector("header");
let answerDisplay = document.createElement("div");
answerDisplay.className = "answerDisplay";
let countdownText = document.getElementById("countdown");
let countdown = 75;

let questionCards = document.createElement("section");
questionCards.id = "questionCards";
document.body.appendChild(questionCards);

let questionCard = document.createElement("div");
let questionCardHeading = document.createElement("h2");

let answers = document.createElement("ul");
answers.className = "answers";

let answer1 = document.createElement("li");
let answer2 = document.createElement("li");
let answer3 = document.createElement("li");
let answer4 = document.createElement("li");

let answer1Button = document.createElement("button");
answer1Button.className = "answerButton";
let answer2Button = document.createElement("button");
answer2Button.className = "answerButton";
let answer3Button = document.createElement("button");
answer3Button.className = "answerButton";
let answer4Button = document.createElement("button");
answer4Button.className = "answerButton";


const questionObj = {
  question1: {
    question: "What is the capital of Japan?",
    answers: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
  },
  question2: {
    question: "Which planet is known as the 'Red Planet'?",
    answers: ["Earth", "Mars", "Venus", "Jupiter"],
  },
  question3: {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
  }
};
// create function for countdown timer
function timer() {
  function updateCountdown() {
    if (countdown > 0) {
      countdownText.textContent = "Time: " + countdown;
      countdown--;
    } else {
      clearInterval(intervalId);
      // insert game over elements and functionality
    }
  }
  let intervalId = setInterval(updateCountdown, 1000);
}

// create a function to subtract 10 seconds from timer
function subtractTenSeconds() {
  countdown = Math.max(0, countdown - 10);
}
// create function to show which question the user is on
function question() {
  
}
function answerClick() {
  let buttons = document.querySelectorAll(".answerButton");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
    });
  });
}
// create event listener for start button
startButton.addEventListener("click", function () {
  timer();
  hideHeader.innerHTML = "";
  
  question();

  answerClick();
});
