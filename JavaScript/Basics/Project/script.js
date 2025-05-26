const questionNumber = document.getElementById("question-number");
const questionContent = document.getElementById("question-content");
const optionSecction = document.getElementById("option-section");
const scoreElement = document.getElementById("score");
const questionStatus = document.getElementById("question-status");

let currentQuestionIndex = 0;
let score = 0;

let updateScore = () => {
  scoreElement.innerText = score + "/" + quizData.length;
};
updateScore();

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];

  questionNumber.innerText = currentQuestionIndex + 1;
  questionContent.innerText = currentQuestion.question;

  optionSecction.innerHTML = "";

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const btn = document.createElement("button");

    btn.innerText = currentQuestion.options[i];

    btn.onclick = function () {
      checkAnswer(i);
    };

    optionSecction.appendChild(btn);
  }
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    questionStatus.innerText = "Correct!";
    questionStatus.style.color = "green";
    score++;
    updateScore();
  } else {
    questionStatus.innerText = "Incorrect!";
    questionStatus.style.color = "red";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    questionStatus.innerText = `Quiz Completed! Your score is: ${score} / ${quizData.length}`;

    // Reset the quiz
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    loadQuestion();
  }
}

loadQuestion();
