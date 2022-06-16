/* eslint-disable no-console */
/* eslint-disable import/extensions */

import hello from '../cli.js';
import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // обьясняем правила

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

const processGame = () => {
  const randomNumber = randomInt(); // получаем рандомное число
  console.log(`Question: ${randomNumber}`); // задаем вопрос
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no'; // получаем правильный ответ
  return correctAnswer;
};

const prime = () => runGame(processGame, userName, rules);

export default prime;
