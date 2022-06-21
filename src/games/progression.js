import randomInt from '../randIntCalc.js';
import game from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const processGame = () => {
  const startProgression = randomInt(1, 10);
  const stepProgression = randomInt(1, 5);
  const lengthProgression = randomInt(5, 10);
  const hiddenNumber = randomInt(0, lengthProgression - 1);
  const progression = getProgression(startProgression, stepProgression, lengthProgression);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const finalTask = progression.join(' ');
  return [correctAnswer, finalTask];
};

const startGame = () => game(processGame, rules);

export default startGame;
