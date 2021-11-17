import './style.css';
import { getScore, postScore } from './api.js';

const refresh = document.querySelector('#refresh');
const submit = document.querySelector('#submit');
const scoresContainer = document.querySelector('.scores');
const form = document.querySelector('.add-score');

const display = () => {
  getScore()
    .then((result) => {
      scoresContainer.innerHTML = '';
      console.log(result);
      result.forEach((res) => {
        scoresContainer.innerHTML += `<li><span>${res.name}</span> : <span>${res.score}</span </li>`;
      });
    });
};

display();

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const userName = document.querySelector('.name').value;
  const userScore = document.querySelector('.score').value;
  if (userName && userScore) {
    postScore(userName, userScore);
    display();
    form.reset();
  }
});

refresh.addEventListener('click', () => {
  getScore();
  display();
});
