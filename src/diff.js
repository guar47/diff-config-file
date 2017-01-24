// @flow
/* eslint-disable no-console */

// const longesteFile = keysFirst.length > keysSecond.length ? keysFirst.length : keysSecond.length;

const gendiff = (firstFile, secondFile) => {
  let result = '{';
  const parseFirst = JSON.parse(firstFile);
  const parseSecond = JSON.parse(secondFile);
  const keysFirst = Object.keys(parseFirst);
  const keysSecond = Object.keys(parseSecond);
  for (let i = 0; i < keysFirst.length; i += 1) {
    if (parseFirst[keysFirst[i]] === parseSecond[keysSecond[i]] &&
      keysFirst[i] === keysSecond[i]) {
      result += `\n  ${keysFirst[i]}: ${parseFirst[keysFirst[i]]}`;
    } else if (parseFirst[keysFirst[i]] !== parseSecond[keysSecond[i]] ||
      keysFirst[i] !== keysSecond[i]) {
      result += `\n  + ${keysFirst[i]}: ${parseFirst[keysFirst[i]]}\n  - ${keysSecond[i]}: ${parseSecond[keysSecond[i]]}`;
    }
  }
  return `${result}\n}`;
};

export default gendiff;
