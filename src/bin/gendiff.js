#!/usr/bin/env node

import fs from 'fs';
import program from 'commander';
import gendiff from '../diff';

program
  .version('0.1.3')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) =>
  console.log(gendiff(fs.readFileSync(firstConfig, 'utf8'), fs.readFileSync(secondConfig, 'utf8'))))
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
