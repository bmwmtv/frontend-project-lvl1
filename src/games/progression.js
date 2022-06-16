/* eslint-disable no-console */
/* eslint-disable import/extensions */

import hello from '../cli.js';
import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const userName = hello(); // здороваемся , узнаем имя пользователя
const rules = 'What number is missing in the progression?'; // обьясняем правила

// вычисляем прогрессию

const generateProgression = (start, step, hideNum) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(start + step * i);
  }
  progression[hideNum] = '..';
  return progression.join(' ');
};

const processGame = () => {
  const startProgrNumber = randomInt(1, 10);
  const stepProgr = randomInt(2, 5);
  const randomHiddenNumber = randomInt(1, 10);
  const finalTask = generateProgression(startProgrNumber, stepProgr, randomHiddenNumber);
  const correctAnswer = String(startProgrNumber + stepProgr * randomHiddenNumber);
  console.log(`Question: ${finalTask}`); // задаем вопрос пользователю
  return correctAnswer;
};

const progres = () => runGame(processGame, userName, rules);

export default progres;
