#!/usr/bin/env node
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { hello } from '../src/cli.js';

hello();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomInt = Math.floor(Math.random() * 100);
console.log(randomInt);

console.log(`Question: ${randomInt}`);
