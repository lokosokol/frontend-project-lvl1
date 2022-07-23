import readlineSync from 'readline-sync';

const roundsCount = 3;

const brainGames = (rules, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`,
      );
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainGames;
