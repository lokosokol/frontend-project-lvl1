import getRandomNumber from '../helpers.js';
import brainGames from '../index.js';

const rules = 'What number is missing in the progression?';

const getSequence = (sequenceLength, sequenceDifference, firstTerm) => {
  const sequence = [];
  let term = firstTerm;
  for (let i = 0; i < sequenceLength; i += 1) {
    sequence.push(term);
    term += sequenceDifference;
  }

  return sequence;
};

const hideNumber = (sequence, termNumber) => {
  const newSequence = [...sequence];
  newSequence[termNumber] = '..';

  return newSequence.join(' ');
};

const getGameData = () => {
  const randomFirstTerm = getRandomNumber(100);
  const randomSequenceLength = getRandomNumber(5, 11);
  const randomDifference = getRandomNumber(1, 6);
  const sequence = getSequence(
    randomSequenceLength,
    randomDifference,
    randomFirstTerm,
  );
  const i = getRandomNumber(randomSequenceLength);
  const question = hideNumber(sequence, i);
  const correctAnswer = String(sequence[i]);

  return [question, correctAnswer];
};

export default () => brainGames(rules, getGameData);
