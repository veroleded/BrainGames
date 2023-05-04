export default {
  start: {
    welcom: 'Welcom to the Brain Games!',

    question: (isFirstTry = true) => (isFirstTry
      ? 'May I have your name?\n'
      : 'You have to say your name!\n'),

    hello: (name) => `Hello, ${name}!`,
  },

  selectGame: 'Choose a game',
  correct: 'Correct!',
  congratulations: (name) => `Congratulations, ${name}! You win!`,
  incorrect: (userAnswer, correctAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  question: (value) => `Question: ${value}`,
  bye: (name) => `Goodbye, ${name}`,
  answer: 'Tour answer: ',
  anotherTry: 'Do you want to play again?',
  errors: 'You made mistakes :(',

  even: {
    rules: 'Answer "yes" if the number is even, otherwise answer "no"',
  },
  calc: {
    rules: 'What is the result of the expression?',
  },
  gcd: {
    rules: 'Find the greatest common divisor of given numbers.',
  },
};
