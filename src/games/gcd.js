import { getRandomNum } from '../utils.js';

const gcd = () => {
  const numberOne = getRandomNum(1, 101);
  const numberTwo = getRandomNum(1, 101);
  const question = `${numberOne} ${numberTwo}`;
  if (numberOne === numberTwo) {
    return { question, correctAnswer: String(numberOne) };
  }

  const getGcd = (x, y) => {
    if (x < y) {
      return getGcd(y, x);
    }

    if (!y) {
      return x;
    }

    return getGcd(y, x % y);
  };

  const correctAnswer = String(getGcd(numberOne, numberTwo));

  return { question, correctAnswer };
};

export default gcd;
