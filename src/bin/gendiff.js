#!/usr/bin/env node
/* eslint-disable no-console */

import program from 'commander';
import gendiff from '../diff';

program
  .version('0.2.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) =>
  console.log(gendiff(firstConfig, secondConfig)))
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
