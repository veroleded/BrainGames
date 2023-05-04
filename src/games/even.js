import { getRandomNum } from '../utils.js';

const even = () => {
  const number = getRandomNum(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default even;
