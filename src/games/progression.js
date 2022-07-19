#!/usr/bin/env node

import { getRandomNumber } from '../random.js';

const rules = 'What number is missing in the progression?';

const questionAndAnswer = () => {
  let term = getRandomNumber(100);
  const randomSequenceLength = getRandomNumber(5, 11);
  const randomDifference = getRandomNumber(1, 6);
  const sequence = [];
  for (let i = 0; i < randomSequenceLength; i += 1) {
    sequence.push(term);
    term += randomDifference;
  }
  const i = getRandomNumber(randomSequenceLength);
  const correctAnswer = String(sequence[i]);
  sequence[i] = '..';
  const question = sequence.join(' ');

  return [question, correctAnswer];
};

export { rules, questionAndAnswer };
