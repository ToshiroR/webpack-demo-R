import _ from 'lodash';
import printMe from './print.js';

function createDiv() {
  const div = document.createElement('div');
  const btn = document.createElement('button');

  div.classList = 'duck';
  div.textContent = 'fun';

  btn.textContent = 'Click me Bitch!';
  btn.onclick = printMe;

  div.appendChild(btn);

  return div;
}

document.body.appendChild(createDiv());
