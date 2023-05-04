import { getUserName } from './utils.js';
import text from './text.js';
import play from './games/index.js';

const brainGames = async () => {
  console.log(text.start.welcom);
  const name = getUserName();
  console.log(text.start.hello(name));
  play(name);
};

export default brainGames;
