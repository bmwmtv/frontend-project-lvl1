/* eslint-disable no-console */
/* eslint-disable import/extensions */

import hello from '../cli.js';
import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
const rules = 'What is the result of the expression?';

const randomCalcFunc = () => { // случайная маиематическая операция
  const calcFunc = ['+', '-', '*']; // задаём список операций калькулятора
  return calcFunc[Math.floor(Math.random() * 3)]; // выбираем случайную операцию
};

const calculation = (num1, num2, Func) => { // вычисление математических операций
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

const processGame = () => {
  const randomNum1 = randomInt();
  const randomNum2 = randomInt();
  const randomFunc = randomCalcFunc();
  const correctAnswer = String(calculation(randomNum1, randomNum2, randomFunc));
  console.log(`Question: ${randomNum1} ${randomFunc} ${randomNum2}`);
  return correctAnswer;
};

const calc = () => runGame(processGame, userName, rules);

export default calc;
