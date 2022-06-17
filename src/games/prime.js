import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const randomNumber = randomInt();
  const finalTask = randomNumber;
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';
  return [correctAnswer, finalTask];
};

const prime = () => runGame(processGame, rules);

export default prime;
