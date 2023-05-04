import { getRandomNum } from '../utils.js';

const progression = () => {
  const startNumber = getRandomNum(0, 101);
  const step = getRandomNum(1, 10);
  const length = getRandomNum(7, 15);
  const skipIndex = getRandomNum(0, length);

  const line = [startNumber];
  for (let i = 0; i < length - 1; i += 1) {
    line.push(line[i] + step);
  }

  const correctAnswer = String(line[skipIndex]);
  line[skipIndex] = '..';
  const question = line.join(' ');

  return { question, correctAnswer };
};

export default progression;
