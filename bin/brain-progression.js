#!/usr/bin/env node

import { rules, questionAndAnswer } from '../src/games/progression.js';
import brainGames from '../src/index.js';

brainGames(rules, questionAndAnswer);
