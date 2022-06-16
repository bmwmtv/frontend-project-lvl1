/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const getAnAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const runGame = (game, userName, rules) => {
  console.log(rules);
  for (let c = 0; c < 3; c += 1) { // запускаем цикл из трёх попыток
    const correctAnswer = game(); // считаем ответ
    const userResponse = getAnAnswer(); // получаем ответ пользователя
    if (correctAnswer !== userResponse) {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
