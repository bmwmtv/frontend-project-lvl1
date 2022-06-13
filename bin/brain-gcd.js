#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { hello } from '../src/cli.js';
import { randomInt, getAnAnswer } from '../src/even-cli.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
console.log('Find the greatest common divisor of given numbers.'); // обьясняем правила

const gcd = (a, b) => { // функция вычисления наибольший общий делитель
  let num1 = a;
  let num2 = b;
  while ((num1 % num2) > 0) {
    const temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num2;
};

// запускаем игру
let result = true;

for (let c = 0; c < 3; c += 1) { // запускаем цикл из трёх попыток
  const randomNum1 = randomInt();
  const randomNum2 = randomInt();
  const correctAnswer = String(gcd(randomNum1, randomNum2)); // считаем ответ
  console.log(`Question: ${randomNum1} ${randomNum2}`); // задаем вопрос пользователю
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
