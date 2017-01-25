import fs from 'fs';
import path from 'path';
import selectParser from '../src/parsers';

const returnDiff = (firstData, secondData) => {
  const keysFirst = Object.keys(firstData);
  const keysSecond = Object.keys(secondData);
  const resultReduce = keysFirst.reduce((resultString, key, index) => {
    if (key === keysSecond[index] && firstData[key] === secondData[key]) {
      return `${resultString}\n    ${key}: ${firstData[key]}`;
    } else if (keysSecond[index] === undefined) {
      return `${resultString}\n  - ${key}: ${firstData[key]}`;
    } else if (key !== keysSecond[index] || firstData[key] !== secondData[key]) {
      return `${resultString}\n  - ${key}: ${firstData[key]}\n  + ${keysSecond[index]}: ${secondData[keysSecond[index]]}`;
    }
    return resultString;
  }, '{');
  if (keysSecond.length > keysFirst.length) {
    const restString = keysSecond.reduce((result, key, index) => {
      if (index > (keysSecond.length - keysFirst.length) + 1) {
        return `${result}\n  + ${key}: ${secondData[key]}`;
      }
      return result;
    }, '');
    return `${resultReduce}${restString}\n}`;
  }
  return `${resultReduce}\n}`;
};

const diffFiles = (firstFile, secondFile) => {
  const firstFileFormat = path.extname(firstFile).replace('.', '');
  const secondFileFormat = path.extname(secondFile).replace('.', '');
  const sourceDataFirst = selectParser(firstFileFormat)(fs.readFileSync(firstFile, 'utf8'));
  const sourceDataSecond = selectParser(secondFileFormat)(fs.readFileSync(secondFile, 'utf8'));
  return returnDiff(sourceDataFirst, sourceDataSecond);
};

export default diffFiles;
