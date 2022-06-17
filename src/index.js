import readlineSync from 'readline-sync';

const getAnAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const numberOfRounds = 3;
const runGame = (getData, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let round = 0; round < numberOfRounds; round += 1) {
    const game = getData();
    const correctAnswer = game[0];
    const finalTask = game[1];
    console.log(`Question: ${finalTask}`);
    const userResponse = getAnAnswer();
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
