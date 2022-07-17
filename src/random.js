export const getRandomNumber = (maxNumber, minNumber = 0) => {
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};
