const getRandomNumber = (maxNumber, minNumber = 0) => Math.floor(
  Math.random() * (maxNumber - minNumber) + minNumber,
);

export default getRandomNumber;
