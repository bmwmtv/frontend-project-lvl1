import readlineSync from 'readline-sync';

export const randomInt = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getAnAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
