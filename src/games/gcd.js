import { getRandomNumber } from '../random.js';

const rules = 'Find the greatest common divisor of given numbers.';

const questionAndAnswer = () => {
  const randomNubmer1 = getRandomNumber();
  const randomNubmer2 = getRandomNumber();
  const question = `${randomNubmer1} ${randomNubmer2}`;
  const greatestCommonDivisor = (a, b) => {
    if (b) {
      return greatestCommonDivisor(b, a % b);
    }
    return a;
  };
  const correctAnswer = String(
    greatestCommonDivisor(randomNubmer1, randomNubmer2)
  );

  return [question, correctAnswer];
};

export { rules, questionAndAnswer };
