# Code-Quiz

Unit 04 Web APIs Homework: Code Quiz

- build a timer-based quiz application that stores high scores client-side.
  [Applied to My Reponsive Portfolio](https://eunsoojung.github.io/Unit-02-Responsive-Portfolio/portfolio.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Preview

[![Password Generator Preview](https://github.com/EunsooJung/Code-Quiz/blob/master/assets/images/Unit%2004%20Code%20Quiz.gif)](https://github.com/EunsooJung/Code-Quiz/blob/master/assets/images/Unit%2004%20Code%20Quiz.gif)

## Usage

### Basic Usage

After downloading, simply edit the HTML, CSS and Javascript files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Guidelines:

- Play proceeds as follows:

  - The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  - Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  - Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

  - When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

### Code Snippet

```javascript
// To get random question (1 to 5)
`const questionIndex = Math.floor(Math.random() * availableQuesions.length);`;

// Apply ES6 to check total question and current question
progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

// Apply the progress bar to count questions
progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

// Apply Math method to pull the questions dynamically.
const questionIndex = Math.floor(Math.random() * availableQuesions.length);
currentQuestion = availableQuesions[questionIndex];
question.innerText = currentQuestion.question;

// Used Dataset to trace correct or incorrect answers and apply bonus time
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
```

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Authors

- **Michael(Eunsoo)Jung**

* [My Portfolio](https://eunsoojung.github.io/Unit-02-Responsive-Portfolio/portfolio.html)
* [https://eunsoojung.github.io/Code-Quiz/](https://eunsoojung.github.io/Code-Quiz/)
* [Link to Github](https://github.com/)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/) www.linkedin.com/in/eun-soo-jung/

## License

This project is licensed under the MIT License
