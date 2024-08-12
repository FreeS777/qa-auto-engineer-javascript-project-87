#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.');

program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'default')
  .action((filepath1, filepath2) => {
    const { format } = program.opts();
    const result = genDiff(filepath1, filepath2, format);
    console.log(result);
  })
  .parse();
