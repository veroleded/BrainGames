const even = () => {
  const number = Math.floor(Math.random() * (Math.floor(101) - Math.ceil(0))) + Math.ceil(0);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default even;
