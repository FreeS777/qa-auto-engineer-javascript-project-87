#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';
import getFormatHandler from '../src/formatters/index.js';

program
  .name('gendiff')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.');

program
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const genDiffResult = genDiff(filepath1, filepath2);
    const { format } = program.opts();
    const formatHandler = getFormatHandler(format);
    const result = format ? formatHandler(filepath1, filepath2) : genDiffResult;
    console.log(result);
  })
  .parse();
