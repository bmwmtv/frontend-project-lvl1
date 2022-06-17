import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, hideNum) => {
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
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
  return [correctAnswer, finalTask];
};

const progres = () => runGame(processGame, rules);

export default progres;
