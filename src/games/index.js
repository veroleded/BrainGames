import readlineSync from 'readline-sync';
import { anotherTry } from '../utils.js';
import text from '../text.js';
import selectGame from '../selectGame.js';
import even from './even.js';

const games = {
  even,
};

const play = async (name) => {
  const game = await selectGame();
  const quantityRounds = 3;
  const userAnswers = [];
  console.log(text[game].rules);

  for (let roundCount = 1; roundCount <= quantityRounds; roundCount += 1) {
    const { question, correctAnswer } = games[game]();
    console.log(text.question(question));
    const userAnswer = readlineSync.question(text.answer).trim();

    if (correctAnswer === userAnswer) {
      console.log(text.correct);
      userAnswers.push(userAnswer);
    } else {
      console.log(text.incorrect(userAnswer, correctAnswer));
    }
  }

  if (userAnswers.length === quantityRounds) {
    console.log(text.congratulations(name));
    await anotherTry();

    if (anotherTry) {
      play(name);
    } else {
      console.log(text.bye(name));
    }
  } else {
    console.log(text.errors);
    await anotherTry();

    if (anotherTry) {
      play(name);
    } else {
      console.log(text.bye(name));
    }
  }
};

export default play;
