import { getRandomNum } from '../utils.js';

const prime = () => {
  const number = getRandomNum(1, 100);
  const question = String(number);

  const isPrime = (num) => {
    if (num === 1) return 'no';

    for (let i = 2; i < Math.ceil(num / 2); i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const correctAnswer = isPrime(number);
  return { question, correctAnswer };
};

export default prime;
