/* eslint-env node, jest */

import fs from 'fs';
import diffFiles from '../src/';

test('check diff two JSON files (recursive)', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile(recursive).json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile(recursive).json';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(recursive).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two JSON files', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile.json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile.json';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(simple).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two JSON files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile(bigger).json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile.json';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(firstBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two JSON files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile.json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile(bigger).json';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(secondBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two YAML files (recursive)', () => {
  const firstConfig = '__tests__/__fixtures__/yaml/firstFile(recursive).yml';
  const secondConfig = '__tests__/__fixtures__/yaml/secondFile(recursive).yaml';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(recursive).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two YAML files', () => {
  const firstConfig = '__tests__/__fixtures__/yaml/firstFile.yml';
  const secondConfig = '__tests__/__fixtures__/yaml/secondFile.yaml';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(simple).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two YAML files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/yaml/firstFile(bigger).yml';
  const secondConfig = '__tests__/__fixtures__/yaml/secondFile.yaml';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(firstBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two YAML files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/yaml/firstFile.yml';
  const secondConfig = '__tests__/__fixtures__/yaml/secondFile(bigger).yaml';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(secondBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two ini files (recursive)', () => {
  const firstConfig = '__tests__/__fixtures__/ini/firstFile(recursive).ini';
  const secondConfig = '__tests__/__fixtures__/ini/secondFile(recursive).ini';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(recursive).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two ini files', () => {
  const firstConfig = '__tests__/__fixtures__/ini/firstFile.ini';
  const secondConfig = '__tests__/__fixtures__/ini/secondFile.ini';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(simple).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two ini files (first bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/ini/firstFile(bigger).ini';
  const secondConfig = '__tests__/__fixtures__/ini/secondFile.ini';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(firstBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two ini files (second bigger)', () => {
  const firstConfig = '__tests__/__fixtures__/ini/firstFile.ini';
  const secondConfig = '__tests__/__fixtures__/ini/secondFile(bigger).ini';
  const result = (fs.readFileSync('__tests__/__fixtures__/result(secondBigger).txt', 'utf8'));
  expect(diffFiles(firstConfig, secondConfig, 'json')).toBe(result);
});
test('check diff two JSON files (recursive) to plain output', () => {
  const firstConfig = '__tests__/__fixtures__/json/firstFile(recursive).json';
  const secondConfig = '__tests__/__fixtures__/json/secondFile(recursive).json';
  const result = 'Property common.setting2 was removed\nProperty common.setting6 was removed\nProperty common.setting4 was added with value: blah blah\nProperty common.setting5 was added with complex value\n\nProperty group1.baz was updated. From bas to bars\n\nProperty group2 was removed\nProperty group3 was added with complex value\n';
  expect(diffFiles(firstConfig, secondConfig, 'plain')).toBe(result);
});
test('check diff two YAML files to plain output', () => {
  const firstConfig = '__tests__/__fixtures__/yaml/firstFile.yml';
  const secondConfig = '__tests__/__fixtures__/yaml/secondFile.yaml';
  const result = 'Property timeout was updated. From 50 to 20\nProperty proxy was removed\nProperty verbose was added with value: true\n';
  expect(diffFiles(firstConfig, secondConfig, 'plain')).toBe(result);
});
test('check diff two ini files (first bigger) to plain output', () => {
  const firstConfig = '__tests__/__fixtures__/ini/firstFile(bigger).ini';
  const secondConfig = '__tests__/__fixtures__/ini/secondFile.ini';
  const result = 'Property timeout was updated. From 50 to 20\nProperty proxy was removed\nProperty batch was removed\nProperty verbose was added with value: true\n';
  expect(diffFiles(firstConfig, secondConfig, 'plain')).toBe(result);
});
