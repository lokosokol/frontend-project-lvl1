// eslint-disable-next-line arrow-body-style
const getRandomNumber = (maxNumber, minNumber = 0) => {
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

export default getRandomNumber;
