// @flow
/* eslint-disable no-console */

import fs from 'fs';

const gendiff = (firstFile, secondFile) => {
  const parseFirst = JSON.parse(fs.readFileSync(firstFile, 'utf8'));
  const parseSecond = JSON.parse(fs.readFileSync(secondFile, 'utf8'));
  const keysFirst = Object.keys(parseFirst);
  const keysSecond = Object.keys(parseSecond);
  const resultReduce = keysFirst.reduce((resultString, key, index) => {
    if (key === keysSecond[index] && parseFirst[key] === parseSecond[key]) {
      return `${resultString}\n    ${key}: ${parseFirst[key]}`;
    } else if (keysSecond[index] === undefined) {
      return `${resultString}\n  - ${key}: ${parseFirst[key]}`;
    } else if (key !== keysSecond[index] || parseFirst[key] !== parseSecond[key]) {
      return `${resultString}\n  - ${key}: ${parseFirst[key]}\n  + ${keysSecond[index]}: ${parseSecond[keysSecond[index]]}`;
    }
    return resultString;
  }, '{');
  if (keysSecond.length > keysFirst.length) {
    const restString = keysSecond.reduce((result, key, index) => {
      if (index > (keysSecond.length - keysFirst.length) + 1) {
        return `${result}\n  + ${key}: ${parseSecond[key]}`;
      }
      return result;
    }, '');
    return `${resultReduce}${restString}\n}`;
  }
  return `${resultReduce}\n}`;
};

export default gendiff;
