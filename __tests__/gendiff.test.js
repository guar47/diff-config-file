// @flow
/* eslint-env jest */

import fs from 'fs';
import diffFiles from '../src/';

test('check diff two JSON files (recursive)', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile(recursive).json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile(recursive).json';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(recursive).txt', 'utf8'));

  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two JSON files', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile.json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile.json';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(simple).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two JSON files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile(bigger).json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile.json';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(firstBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two JSON files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile.json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile(bigger).json';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(secondBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two YAML files', () => {
  const firstConfig = '__tests__/__fixtures__/yaml/firstFile.yml';
  const secondConfig = '__tests__/__fixtures__/yaml/secondFile.yaml';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(simple).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two YAML files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/yaml/firstFile(bigger).yml';
  const secondConfig = '__tests__/__fixtures__/yaml/secondFile.yaml';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(firstBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two YAML files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/yaml/firstFile.yml';
  const secondConfig = '__tests__/__fixtures__/yaml/secondFile(bigger).yaml';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(secondBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two ini files', () => {
  const firstConfig = '__tests__/__fixtures__/ini/firstFile.ini';
  const secondConfig = '__tests__/__fixtures__/ini/secondFile.ini';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(simple).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two ini files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/ini/firstFile(bigger).ini';
  const secondConfig = '__tests__/__fixtures__/ini/secondFile.ini';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(firstBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
test('check diff two ini files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/ini/firstFile.ini';
  const secondConfig = '__tests__/__fixtures__/ini/secondFile(bigger).ini';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(secondBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig)).toBe(result);
});
