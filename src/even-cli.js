import readlineSync from 'readline-sync';

export const randomInt = () => Math.floor(Math.random() * 10);

export const getAnAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
