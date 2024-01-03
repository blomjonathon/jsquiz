let startButton = document.querySelector(".startButton");
let hideHeader = document.querySelector("header");
let answerDisplay = document.createElement("div");
answerDisplay.className = "answerDisplay";
let countdownText = document.getElementById("countdown");
let countdown = 75;

let questionCards = document.createElement("section");
questionCards.id = "questionCards";
document.body.appendChild(questionCards);

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

// create question data

let question1 = question(
  "question1",
  "What is your favorote color?",
  "green",
  "blue",
  "red",
  "pink",
  'green'
);
let question2 = question(
  "question2",
  "What is your favorote band?",
  "relient k",
  "green day",
  "dorothy",
  "black", 
  'black'
);
let question3 = question(
  "question3",
  "What is your favorote ice cream?",
  "vanilla",
  "velvet",
  "carpet",
  "mustard",
  'vanilla'
);

// create function to show which question the user is on
function question(id, question, answerA, answerB, answerC, answerD, correctAnswer) {
  let questionCard = document.createElement("div");
  questionCard.id = id 
  let questionCardHeading = document.createElement("h2");
  questionCardHeading.textContent = question

  let answers = document.createElement("ul");
  answers.className = "answers";

  let answer1 = document.createElement("li");
  let answer2 = document.createElement("li");
  let answer3 = document.createElement("li");
  let answer4 = document.createElement("li");

  let answer1Button = document.createElement("button");
  answer1Button.className = "answerButton";
  answer1Button.textContent = answerA
  answer1Button.setAttribute('data-answer', answerA == correctAnswer)

  let answer2Button = document.createElement("button");
  answer2Button.className = "answerButton";
  answer2Button.textContent = answerB
  answer2Button.setAttribute('data-answer', answerB == correctAnswer)

  let answer3Button = document.createElement("button");
  answer3Button.className = "answerButton";
  answer3Button.textContent = answerC
  answer3Button.setAttribute('data-answer', answerC == correctAnswer)

  let answer4Button = document.createElement("button");
  answer4Button.className = "answerButton";
  answer4Button.textContent = answerD
  answer4Button.setAttribute('data-answer', answerD == correctAnswer)

  questionCard.appendChild(questionCardHeading);
  questionCardHeading.appendChild(answer1);
  questionCardHeading.appendChild(answer2);
  questionCardHeading.appendChild(answer3);
  questionCardHeading.appendChild(answer4);

  answer1.appendChild(answer1Button)
  answer2.appendChild(answer2Button)
  answer3.appendChild(answer3Button)
  answer4.appendChild(answer4Button)

  return questionCard;
}
function answerClick() {
  let buttons = document.querySelectorAll(".answerButton");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if(button.hasAttribute("data-answer", 'true')){
        questionCard++
      }
    });
  });
}
// create event listener for start button
startButton.addEventListener("click", function () {
  timer();
  hideHeader.innerHTML = "";
  questionCards.appendChild(question1)
});
