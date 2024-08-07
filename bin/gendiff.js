#!/usr/bin/env node

import { program } from 'commander';
import path from 'path';
import genDiff from '../src/index.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => (
    console.log(
      genDiff(
        path.resolve(process.cwd(), filepath1),
        path.resolve(process.cwd(), filepath2),
      ),
    )
  ))
  .parse();
  
