#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { hello } from '../src/cli.js';
import { randomInt, getAnAnswer } from '../src/even-cli.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
console.log('What number is missing in the progression?'); // обьясняем правила

// вычисляем прогрессию

const generateProgression = (start, step, hideNum) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(start + step * i);
  }
  progression[hideNum] = '..';
  return progression.join(' ');
};

// запускаем игру
let result = true;

for (let c = 0; c < 3; c += 1) { // запускаем цикл из трёх попыток
  const startProgrNumber = randomInt(1, 10);
  const stepProgr = randomInt(2, 5);
  const randomHiddenNumber = randomInt(1, 10);
  const finalTask = generateProgression(startProgrNumber, stepProgr, randomHiddenNumber);
  const correctAnswer = String(startProgrNumber + stepProgr * randomHiddenNumber);

  console.log(`Question: ${finalTask}`); // задаем вопрос пользователю
  const userResponse = getAnAnswer(); // получаем ответ пользователя
  if (correctAnswer === userResponse) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    result = false;
    break;
  }
}
console.log((result) ? (`Congratulations, ${userName}!`) : (`Let's try again, ${userName}!`));
