let startButton = document.querySelector(".startButton");
let hideHeader = document.querySelector("header");
let answerDisplay = document.createElement("div");
answerDisplay.className = "answerHidden answerDisplay";
let countdownText = document.getElementById("countdown");
let countdown = 75;
let currentQuestion = 1;

let questionCards = document.createElement("section");
questionCards.id = "questionCards";
document.body.appendChild(questionCards);

let allDone = document.createElement("div");
allDone.className = "allDone";
let allDoneDivAlign = document.createElement("div");
allDoneDivAlign.className = "allDoneDivAlign";
let allDoneH2 = document.createElement("h2");
allDoneH2.className = "allDoneH2";
allDoneH2.textContent = "All done!";
let scoreText = document.createElement("p");
let inputField = document.createElement("label");
inputField.className = "inputField";
let initialsLabel = document.createElement("p");
initialsLabel.className = "initialsLabel";
initialsLabel.textContent = "Enter Initials: ";
let input = document.createElement("input");
input.type = "text";
input.id = "input";
let sumbitButton = document.createElement("button");
sumbitButton.className = "submitButton";
sumbitButton.textContent = "Submit";

let highScoresDiv1 = document.createElement("div");
highScoresDiv1.className = "highScoresDiv1";
let highScoresDiv2 = document.createElement("div");
let highScoresDivH2 = document.createElement("h2");
highScoresDiv2.className = "highScoresDivH2";
highScoresDivH2.textContent = 'High Scores'
let present = document.createElement("p");
present.className = "present";
let goBackButton = document.createElement("button");
goBackButton.className = "goBackButton";
goBackButton.textContent = "Go Back";
clearButton = document.createElement('button')
clearButton.className = 'clearButton'
clearButton.textContent = 'Clear high scores'

viewScoreButton = document.getElementById('#viewScore')

// create function for countdown timer
function timer() {
  function updateCountdown() {
    if (countdown > 0) {
      countdownText.textContent = "Time: " + countdown;
      countdown--;
    } else {
      clearInterval(intervalId);
      gameOver()
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
  "Inside which HTML element do we put the JavaScript?",
  "1. <js>",
  "2. <javascript>",
  "3. <scripting>",
  "4. <script>",
  "4. <script>"
);
let question2 = question(
  "question2",
  "Where is the correct place to insert a JavaScript?",
  "1. <body>",
  "2. <nav>",
  "3. <footer>",
  "4. <header>",
  "1. <body>"
);
let question3 = question(
  "question3",
  "How do you write 'Hello World' in an alert box?",
  "1. msgBox('Hello World')",
  "2. alert('Hello World')",
  "3. msg('Hello World')",
  "4. alertBox('Hello World')",
  "2. alert('Hello World')"
);
let question4 = question(
  "question4",
  "How do you create a function in JavaScript?",
  "1. function = myfunction()",
  "2. function: myfunction()",
  "3. function myFunction()",
  "4. function = ()",
  "3. function myFunction()"
);
let question5 = question(
  "question5",
  "How to write an IF statement in JavaScript?",
  "1. if i = 5 then",
  "2. if (i = 5)",
  "3. if i == 5",
  "4. if function 5",
  "2. if (i = 5)"
);
let question6 = question(
  "question6",
  "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
  "1. if i =! 5 then",
  "2. if (i <> 5)",
  "3. if i <> 5",
  "4. if (i != 5)",
  "4. if (i != 5)"
);
// create function to show which question the user is on
function question(
  id,
  question,
  answerA,
  answerB,
  answerC,
  answerD,
  correctAnswer
) {
  let questionCard = document.createElement("div");
  questionCard.id = id;
  questionCard.className = "hidden questionCard";
  let questionCardHeading = document.createElement("h2");
  questionCardHeading.textContent = question;

  let answers = document.createElement("ul");
  answers.className = "answers";

  let answer1 = document.createElement("li");
  let answer2 = document.createElement("li");
  let answer3 = document.createElement("li");
  let answer4 = document.createElement("li");

  let answer1Button = document.createElement("button");
  answer1Button.className = "answerButton";
  answer1Button.textContent = answerA;
  answer1Button.setAttribute("data-answer", answerA == correctAnswer);

  let answer2Button = document.createElement("button");
  answer2Button.className = "answerButton";
  answer2Button.textContent = answerB;
  answer2Button.setAttribute("data-answer", answerB == correctAnswer);

  let answer3Button = document.createElement("button");
  answer3Button.className = "answerButton";
  answer3Button.textContent = answerC;
  answer3Button.setAttribute("data-answer", answerC == correctAnswer);

  let answer4Button = document.createElement("button");
  answer4Button.className = "answerButton";
  answer4Button.textContent = answerD;
  answer4Button.setAttribute("data-answer", answerD == correctAnswer);

  questionCard.appendChild(questionCardHeading);
  questionCardHeading.appendChild(answer1);
  questionCardHeading.appendChild(answer2);
  questionCardHeading.appendChild(answer3);
  questionCardHeading.appendChild(answer4);

  answer1.appendChild(answer1Button);
  answer2.appendChild(answer2Button);
  answer3.appendChild(answer3Button);
  answer4.appendChild(answer4Button);

  return questionCard;
}
function answerClick() {
  let buttons = document.querySelectorAll(".answerButton");
  let currentScore = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      currentQuestion++;
      showQuestion();
      if (button.getAttribute("data-answer") === "true") {
        answerDisplay.classList.remove("answerHidden");
        answerDisplay.textContent = "Correct!";
        currentScore++;
      } else {
        answerDisplay.classList.remove("answerHidden");
        answerDisplay.textContent = "Wrong!";
        subtractTenSeconds();
      }
      if (currentQuestion > 6) {
        function gameOver(){
        document.body.appendChild(allDone);
        allDone.appendChild(allDoneDivAlign);
        allDoneDivAlign.appendChild(allDoneH2);
        allDoneDivAlign.appendChild(scoreText);
        allDoneDivAlign.appendChild(inputField);
        inputField.appendChild(initialsLabel);
        inputField.appendChild(input);
        inputField.appendChild(sumbitButton);
        scoreText.textContent = "Your final score is " + currentScore;
        sumbitButton.addEventListener("click", function () {
          allDone.innerHTML = ''
          document.body.appendChild(highScoresDiv1)
          highScoresDiv1.appendChild(highScoresDiv2)
          highScoresDiv2.appendChild(highScoresDivH2)
          highScoresDivH2.appendChild(present)
          highScoresDivH2.appendChild(goBackButton)
          highScoresDivH2.appendChild(clearButton)

          let userInitials = input.value;
          let storedScore = userInitials.toString() + " - " + currentScore
          localStorage.setItem(
            "highScore",
             storedScore.toString()
          )
          let retrievedScore = localStorage.getItem("highScore")
          present.textContent = retrievedScore
        });
      }
      gameOver()
    }
    });
  });
}
// hide all questions and show current question
function showQuestion() {
  let questions = document.querySelectorAll(".questionCard");
  questions.forEach(function (question) {
    question.classList.add("hidden");
    if (question.id == "question" + currentQuestion) {
      question.classList.remove("hidden");
      question.appendChild(answerDisplay);
    }
  });
}
goBackButton.addEventListener("click", function(){
  location.reload()
})
clearButton.addEventListener("click", function(){
  localStorage.clear()
  present.textContent = ''
})
viewScore.addEventListener('click', function(){
  hideHeader.innerHTML = ''
  allDone.innerHTML = ''
  questionCards.innerHTML = ''
  document.body.appendChild(highScoresDiv1)
  highScoresDiv1.appendChild(highScoresDiv2)
  highScoresDiv2.appendChild(highScoresDivH2)
  highScoresDivH2.appendChild(present)
  highScoresDivH2.appendChild(goBackButton)
  highScoresDivH2.appendChild(clearButton)
  retrievedScore = localStorage.getItem("highScore")
  present.textContent = retrievedScore
})
// create event listener for start button
startButton.addEventListener("click", function () {
  timer();
  hideHeader.innerHTML = "";
  questionCards.appendChild(question1);
  questionCards.appendChild(question2);
  questionCards.appendChild(question3);

  questionCards.appendChild(question4);
  questionCards.appendChild(question5);
  questionCards.appendChild(question6);

  answerClick();
  showQuestion();
});
