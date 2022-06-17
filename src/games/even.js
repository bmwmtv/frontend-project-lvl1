import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const processGame = () => {
  const randomNumber = randomInt();
  const finalTask = `${randomNumber}`;
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [correctAnswer, finalTask];
};

const even = () => runGame(processGame, rules);

export default even;
