const userInitial = document.getElementById('userInitial');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;

userInitial.addEventListener('keyup', () => {
  // console.log(userInitial.value);
  saveScoreBtn.disabled = !userInitial.value;
});

saveHighScore = e => {
  console.log('Click the save button!');
  e.preventDefault();
};
