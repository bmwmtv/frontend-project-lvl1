/* eslint-disable no-console */
/* eslint-disable import/extensions */

import hello from '../cli.js';
import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
const rules = 'Find the greatest common divisor of given numbers.'; // обьясняем правила

const gcdCalc = (a, b) => { // функция вычисления наибольший общий делитель
  let num1 = a;
  let num2 = b;
  while ((num1 % num2) > 0) {
    const temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num2;
};

const processGame = () => {
  const randomNum1 = randomInt();
  const randomNum2 = randomInt();
  const correctAnswer = String(gcdCalc(randomNum1, randomNum2)); // считаем ответ
  console.log(`Question: ${randomNum1} ${randomNum2}`); // задаем вопрос пользователю
  return correctAnswer;
};

const gcd = () => runGame(processGame, userName, rules);

export default gcd;
