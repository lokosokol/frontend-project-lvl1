import getRandomNumber from '../helpers.js';
import brainGames from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getGameData = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

export default () => brainGames(rules, getGameData);
