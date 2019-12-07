const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreEl = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const timerEl = document.getElementById('timer');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    choice1: 'response.write("Hello World")',
    choice2: '"Hello World"',
    choice3: 'document.write("Hello World")',
    choice4: '("Hello World")',
    answer: 3
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    choice1: 'Both the <head> section and the <body> section are correct',
    choice2: 'The <body> section',
    choice3: 'The <head> section',
    choice4: 'The <td> tag',
    answer: 1
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    choice1: '<javascript>',
    choice2: ' <js>',
    choice3: '<script>',
    choice4: '<scripting>',
    answer: 3
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: '<script src="xxx.js">',
    choice2: '<script name="xxx.js">',
    choice3: '<script href="xxx.js">',
    choice4: '<script value="xxx.js">',
    answer: 1
  },
  {
    question: 'How do you create a function?',
    choice1: 'function:myFunction()',
    choice2: 'function=myFunction()',
    choice3: 'function myFunction()',
    choice4: 'myFunction():function',
    answer: 3
  }
];

var CORRECT_BONUS = 10;
var MAX_QUESTIONS = 5;
var leftTime = 25;
var timer = 0;

startQuizGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  startTimer();
};

// startTimer = () => {
//   timer = setInterval(() => {
//     console.log(leftTime);
//     leftTime--;
//     if (!leftTime) {
//       endGame();
//     }
//   }, 1000);
// };

startTimer = () => {
  timer = setInterval(() => {
    timerStatus(leftTime);
    console.log(leftTime);
    leftTime--;
    if (!leftTime) {
      endGame();
    }
  }, 1000);
};

endGame = () => {
  localStorage.setItem('mostRecentScore', score);
  window.location.href = 'Result.html';
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    endGame();
  }

  questionCounter++;

  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
      incrementScore(CORRECT_BONUS);
      leftTime += 3;
      clearInterval(timer);
      startTimer();
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreEl.innerText = score;
};

timerStatus = num => {
  timer = num;
  timerEl.innerText = timer;
};

startQuizGame();
