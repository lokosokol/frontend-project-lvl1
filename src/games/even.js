import { getRandomNumber } from '../random.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const questionAndAnswer = () => {
  const randomNumber = getRandomNumber();
  const isEvenNumber = randomNumber % 2 === 0;
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEvenNumber ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rules, questionAndAnswer };
