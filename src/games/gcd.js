import randomInt from '../randIntCalc.js';
import game from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdCalc = (a, b) => {
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
  const correctAnswer = String(gcdCalc(randomNum1, randomNum2));
  const finalTask = `${randomNum1} ${randomNum2}`;
  return [correctAnswer, finalTask];
};

const startGame = () => game(processGame, rules);

export default startGame;
