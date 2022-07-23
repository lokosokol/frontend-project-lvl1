import getRandomNumber from '../helpers.js';
import brainGames from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b) {
    return getGreatestCommonDivisor(b, a % b);
  }
  return String(a);
};

const getGameData = () => {
  const randomNubmer1 = getRandomNumber(100);
  const randomNubmer2 = getRandomNumber(100);
  const question = `${randomNubmer1} ${randomNubmer2}`;
  const correctAnswer = getGreatestCommonDivisor(randomNubmer1, randomNubmer2);

  return [question, correctAnswer];
};

export default () => brainGames(rules, getGameData);
