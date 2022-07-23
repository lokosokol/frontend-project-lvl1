import getRandomNumber from '../helpers.js';
import brainGames from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const randomNumber = getRandomNumber(1000);
  const isEvenNumber = randomNumber % 2 === 0;
  const question = randomNumber;
  const correctAnswer = isEvenNumber ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => brainGames(rules, getGameData);
