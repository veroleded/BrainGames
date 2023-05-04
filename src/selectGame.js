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
    ],
  });

  return gameName;
}
