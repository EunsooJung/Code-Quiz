const userInitial = document.getElementById('userInitial');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// local storage
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);
//localStorage.setItem('highScores', []);
//console.log(localStorage.getItem('highScores'));

var MAX_HIGJ_SCORES = 5;

finalScore.innerText = mostRecentScore;

userInitial.addEventListener('keyup', () => {
  // console.log(userInitial.value);
  saveScoreBtn.disabled = !userInitial.value;
});

saveHighScore = e => {
  console.log('Click the save button!');
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: userInitial.value
  };
  console.log(score);

  highScores.push(score);

  // highScores.sort((a, b) => b.score - a.score);
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });

  // To take only top5
  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('index.html');
  console.log(highScores);
};
