// @flow
/* eslint-env jest */

import gendiff from '../src/diff';

test('check diff two JSON files', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile.json';
  const secondConfig = '__tests__/__fixtures__/secondFile.json';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two JSON files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile(bigger).json';
  const secondConfig = '__tests__/__fixtures__/secondFile.json';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n  - batch: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two JSON files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile.json';
  const secondConfig = '__tests__/__fixtures__/secondFile(bigger).json';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n  + batch: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two YAML files', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile.yml';
  const secondConfig = '__tests__/__fixtures__/secondFile.yaml';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two YAML files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile(bigger).yml';
  const secondConfig = '__tests__/__fixtures__/secondFile.yaml';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n  - batch: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two YAML files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile.yml';
  const secondConfig = '__tests__/__fixtures__/secondFile(bigger).yaml';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n  + batch: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two ini files', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile.ini';
  const secondConfig = '__tests__/__fixtures__/secondFile.ini';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two ini files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile(bigger).ini';
  const secondConfig = '__tests__/__fixtures__/secondFile.ini';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n  - batch: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
test('check diff two ini files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/firstFile.ini';
  const secondConfig = '__tests__/__fixtures__/secondFile(bigger).ini';
  const result = '{\n    host: hexlet.io\n  - timeout: 50\n  + timeout: 20\n  - proxy: 123.234.53.22\n  + verbose: true\n  + batch: true\n}';
  expect(gendiff(firstConfig, secondConfig)).toBe(result);
});
// test('check diff two incorrect files', () => {
//   const firstConfig = '__tests__/__fixtures__/incorrectFile.png';
//   const secondConfig = '__tests__/__fixtures__/incorrectFile.png';
//   const result = 'File format is incorrect';
//   expect(gendiff(firstConfig, secondConfig)).toBe(result);
// });
