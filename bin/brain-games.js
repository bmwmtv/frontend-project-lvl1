#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import { hello } from '../src/cli.js';

const user = hello();

console.log(`test ${user}`);
