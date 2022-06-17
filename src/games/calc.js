import randomInt from '../randIntCalc.js';
import runGame from '../index.js';

const rules = 'What is the result of the expression?';

const randomCalcFunc = () => {
  const calcFunc = ['+', '-', '*'];
  const numberOfFuncions = calcFunc.length;
  return calcFunc[randomInt(0, numberOfFuncions - 1)];
};

const calculation = (num1, num2, Func) => {
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
  const finalTask = `${randomNum1} ${randomFunc} ${randomNum2}`;
  return [correctAnswer, finalTask];
};

const calc = () => runGame(processGame, rules);

export default calc;
