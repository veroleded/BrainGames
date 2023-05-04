#!/usr/bin/env node

import { getUserName } from '../src/utils.js';
import text from '../src/text.js';
import play from '../src/games/index.js';

const brainGames = async () => {
  console.log(text.start.welcom);
  const name = getUserName(text.start.question);
  console.log(text.start.hello(name));
  play(name);
};

brainGames();
