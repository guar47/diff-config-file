// @flow
/* eslint-env jest */

import gendiff from '../src/diff';

test('check diff two files', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile.json';
  const secondConfig = '__tests__/__fixtures__/secondFile.json';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile(bigger).json';
  const secondConfig = '__tests__/__fixtures__/secondFile.json';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n  - batch: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile.json';
  const secondConfig = '__tests__/__fixtures__/secondFile(bigger).json';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n  + batch: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
