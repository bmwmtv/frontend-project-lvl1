import readlineSync from 'readline-sync';

const numberOfRounds = 3;
const game = (getData, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let round = 0; round < numberOfRounds; round += 1) {
    const [correctAnswer, finalTask] = getData();
    console.log(`Question: ${finalTask}`);
    const userResponse = readlineSync.question('Your answer: ');
    if (correctAnswer !== userResponse) {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
