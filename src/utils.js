import readlineSync from 'readline-sync';
import select from '@inquirer/select';
import text from './text.js';

export const getUserName = (tryCount = 1) => {
  let name = '';
  if (tryCount === 1) {
    name = readlineSync.question(text.start.question(true)).trim();
  } else {
    name = readlineSync.question(text.start.question(false)).trim();
  }
  if (name.length > 0) {
    return name;
  }
  return getUserName(2);
};

export async function anotherTry() {
  const answer = await select({
    message: text.anotherTry,
    choices: [
      {
        name: 'Yes',
        value: true,
      },
      {
        name: 'No',
        value: false,
      },
    ],
  });
  return answer;
}

export const getRandomNum = (min, max) => (
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min)
);
