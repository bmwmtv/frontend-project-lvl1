import randomInt from '../randIntCalc.js';
import game from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const processGame = () => {
  const randomNumber = randomInt();
  const finalTask = String(randomNumber);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [correctAnswer, finalTask];
};

const startGame = () => game(processGame, rules);

export default startGame;
