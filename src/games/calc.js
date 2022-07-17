import { getRandomNumber } from '../random.js';

const getRandomOperator = () => {
  const maxOperator = 3;
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * maxOperator)];
};

const rules = 'What is the result of the expression?';

const questionAndAnswer = () => {
  const randomOperator = getRandomOperator();
  const randomNubmer1 = getRandomNumber(100);
  const randomNubmer2 = getRandomNumber(100);
  const question = `${randomNubmer1} ${randomOperator} ${randomNubmer2}`;
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = String(randomNubmer1 + randomNubmer2);
      break;
    case '-':
      correctAnswer = String(randomNubmer1 - randomNubmer2);
      break;
    default:
      correctAnswer = String(randomNubmer1 * randomNubmer2);
  }

  return [question, correctAnswer];
};

export { rules, questionAndAnswer };
