/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
