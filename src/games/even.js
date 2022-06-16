/* eslint-disable no-console */
/* eslint-disable import/extensions */

import hello from '../cli.js';
import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
const rules = 'Answer "yes" if the number is even, otherwise answer "no".'; // задаем правила игры

const processGame = () => {
  const randomNumber = randomInt(); // получаем рандомное число
  console.log(`Question: ${randomNumber}`); // задаем вопрос
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no'; // получаем правильный ответ
  return correctAnswer;
};

const even = () => runGame(processGame, userName, rules);

export default even;
