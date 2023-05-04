import readlineSync from 'readline-sync';
import select from '@inquirer/select';
import text from './text.js';

export const getUserName = (question) => {
  const name = readlineSync.question(question(true)).trim();
  if (name.length > 0) {
    return name;
  }
  return getUserName(question(false));
};

export async function anotherTry() {
  await select({
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
}
