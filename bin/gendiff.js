#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .usage('[options] <first_config> <second_config>')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
