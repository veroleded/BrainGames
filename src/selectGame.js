import select from '@inquirer/select';
import texts from './text.js';

export default async function selectGame() {
  const gameName = await select({
    message: texts.selectGame,
    choices: [
      {
        name: 'brain-even',
        value: 'even',
      },
      {
        name: 'brain-calc',
        value: 'calc',
      },
      {
        name: 'brain-gcd',
        value: 'gcd',
      },
      {
        name: 'brain-progression',
        value: 'progression',
      },
    ],
  });

  return gameName;
}
