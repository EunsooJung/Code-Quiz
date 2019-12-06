const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

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

// Constants
var CORRECT_BONUS = 10;
var MAX_QUESTIONS = 5;

startQuizGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  // console.log(availableQuesions);
  getNewQuestion();
};

getNewQuestion = () => {
  // Check When question is finish or end of the question in array.
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // go to end page
    return window.location.assign('/end.html');
  }

  // when we start gaem this will increment it to 1.
  questionCounter++;
  // To get random question (1 to 5)
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  // Access data set attribute data-number
  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  // Take available questions array - splice out the passed question
  availableQuesions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

// When user selected one, take selected data attribue number and reloading browser
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    // console.log(e.target);
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    // const classToApply = 'incorrect';
    // if (selectedAnswer == currentQuestion.answer) {
    //   classToApply = 'correct';
    // }
    // console.log(selectedAnswer == currentQuestion.answer);
    // ternary operator
    const classToApply =
      selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    // console.log(classToApply);
    selectedChoice.parentElement.classList.add(classToApply);

    // Apply setTimeout function include callback method to delay before remove it.
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startQuizGame();