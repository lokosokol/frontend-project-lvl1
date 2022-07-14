/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const evenGame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const maxNumber = 1000;
    const randomNumber = Math.floor(Math.random() * maxNumber);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEvenNumber = randomNumber % 2 === 0;
    if (isEvenNumber === true && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (isEvenNumber === false && userAnswer === 'no') {
      console.log('Correct!');
    } else {
      const correctAnswer = isEvenNumber === true ? 'yes' : 'no';
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`
      );
    }
  }
  console.log(`Congratulations, ${name}`);
};
