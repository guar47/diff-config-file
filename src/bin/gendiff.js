#!/usr/bin/env node
/* eslint-disable no-console */

import program from 'commander';
import diffFiles from '../';

program
  .version('0.2.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig, type) =>
  console.log(diffFiles(firstConfig, secondConfig, type)))
  .parse(process.argv);
