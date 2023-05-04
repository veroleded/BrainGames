import { getRandomNum } from '../utils.js';

const calc = () => {
  const getIntOrDec = () => (getRandomNum(1, 100) % 2 === 0 ? '+' : '-');
  const sign = getIntOrDec();
  const numberOne = getRandomNum(0, 101);
  const numberTwo = getRandomNum(0, 101);
  const question = `${numberOne} ${sign} ${numberTwo}`;
  let correctAnswer = '';
  if (sign === '+') {
    correctAnswer = String(numberOne + numberTwo);
  } else {
    correctAnswer = String(numberOne - numberTwo);
  }
  return { question, correctAnswer };
};

export default calc;
