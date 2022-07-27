import getRandomNumber from '../helpers.js';
import brainGames from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getExpression = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    default:
      return String(number1 * number2);
  }
};

const getGameData = () => {
  const randomOperator = operators[getRandomNumber(operators.length)];
  const randomNubmer1 = getRandomNumber(100);
  const randomNubmer2 = getRandomNumber(100);
  const question = `${randomNubmer1} ${randomOperator} ${randomNubmer2}`;
  const correctAnswer = getExpression(
    randomOperator,
    randomNubmer1,
    randomNubmer2,
  );

  return [question, correctAnswer];
};

export default () => brainGames(rules, getGameData);
