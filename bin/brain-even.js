#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { hello } from '../src/cli.js';
import {randomInt, getAnAnswer} from '../src/even-cli.js';

const userName = hello(); //здороваемся , узнаем имя пользователя

console.log('Answer "yes" if the number is even, otherwise answer "no".'); // обьясняем правила
let result = true;
for (let c = 0; c < 3; c++) { // запускаем цикл из трёх попыток
    const randomNumber = randomInt(); // получаем рандомное число
    console.log(`Question: ${randomNumber}`); // задаем вопрос
    const userResponse = getAnAnswer(); // получаем ответ пользователя
    const correctAnswer = (randomNumber % 2 == 0) ? 'yes': 'no'; //получаем правильный ответ
    if (correctAnswer == userResponse) {
        console.log ('Correct!');
        result = true;
    } else {
        console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        result = false;
        break;
    }
  };
console.log ((result) ? (`Congratulations, ${userName}!`) : (`Let's try again, ${userName}!`));
