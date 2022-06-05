#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { hello } from '../src/cli.js';
import { randomInt, getAnAnswer } from '../src/even-cli.js';
import { randomCalcFunc } from '../src/calc-cli.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
console.log('What is the result of the expression?'); // обьясняем правила

const calculation = (num1, num2, Func) => {
  switch (Func) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return 0;
  }
};

// запускаем игру
let result = true;

for (let c = 0; c < 3; c += 1) { // запускаем цикл из трёх попыток
  const randomNum1 = randomInt();
  const randomNum2 = randomInt();
  const randomFunc = randomCalcFunc();
  const correctAnswer = String(calculation(randomNum1, randomNum2, randomFunc)); // считаем ответ
  console.log(`Question: ${randomNum1} ${randomFunc} ${randomNum2}`); // задаем вопрос пользователю
  const userResponse = getAnAnswer(); // получаем ответ пользователя
  console.log(`try ${c}`);
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
