#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { hello } from '../src/cli.js';
import { randomInt, getAnAnswer } from '../src/even-cli.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // обьясняем правила

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

let result = true;
for (let c = 0; c < 3; c += 1) { // запускаем цикл из трёх попыток
  const randomNumber = randomInt(); // получаем рандомное число
  console.log(`Question: ${randomNumber}`); // задаем вопрос
  const userResponse = getAnAnswer(); // получаем ответ пользователя
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no'; // получаем правильный ответ
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
