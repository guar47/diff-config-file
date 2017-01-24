// @flow

import fs from 'fs';
import gendiff from '../src/diff';

test('check diff two files', () => {
  const firstConfig = fs.readFileSync('__tests__/firstFile.json', 'utf8');
  const secondConfig = fs.readFileSync('__tests__/secondFile.json', 'utf8');
  const result = '{\n  host: hexlet.io\n  + timeout: 50\n  - timeout: 20\n  + proxy: 123.234.53.22\n  - verbose: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
