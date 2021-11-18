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
      result.result.map((res) => {
        scoresContainer.innerHTML += `<li><span>${res.user}</span> : <span>${res.score}</span </li>`;
        return result;
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
  display();
});
