#!/usr/bin/env node
/* eslint-disable no-console */

import program from 'commander';
import diffFiles from '../';

program
  .version('0.4.6')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format (sjson, plain, json)')
  .action((firstConfig, secondConfig) =>
  console.log(diffFiles(firstConfig, secondConfig, program.format)))
  .parse(process.argv);
