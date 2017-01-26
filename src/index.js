import fs from 'fs';
import path from 'path';
import selectParser from './parsers';

const getExtFile = file => path.extname(file).replace('.', '');
// const specSymb = { minus: '-', plus: '+' };

const getStringFromSimple = (Data) => {
  const keys = Object.keys(Data);
  return keys.reduce((resultString, key) => `${resultString}\n    "${key}": "${Data[key]}"\n}`, '{');
};
// const getStringFromRecurse =

const getDiff = (firstData, secondData) => {
  const keysFirst = Object.keys(firstData);
  const keysSecond = Object.keys(secondData);
  const resultReduce = keysFirst.reduce((resultString, key) => {
    if (keysSecond.includes(key) &&
      firstData[key] instanceof Object && secondData[key] instanceof Object) {
      return `${resultString}\n    ${key}: ${getDiff(firstData[key], secondData[key])}`;
    } else if (keysSecond.includes(key) && firstData[key] === secondData[key]) {
      return `${resultString}\n    ${key}: ${firstData[key]}`;
    } else if (!keysSecond.includes(key) && firstData[key] instanceof Object) {
      return `${resultString}\n  - ${key}: ${getStringFromSimple(firstData[key])}`;
    } else if (!keysSecond.includes(key) && firstData[key] !== secondData[key]) {
      return `${resultString}\n  - ${key}: ${firstData[key]}`;
    } else if (keysSecond.includes(key) && firstData[key] !== secondData[key]) {
      return `${resultString}\n  + ${key}: ${secondData[key]}\n  - ${key}: ${firstData[key]}`;
    }
    return `${resultString}`;
  }, '{');
  const restString = keysSecond.reduce((result, key) => {
    if (!keysFirst.includes(key) && secondData[key] instanceof Object) {
      return `${result}\n  + ${key}: ${getStringFromSimple(secondData[key])}`;
    } else if (!keysFirst.includes(key)) {
      return `${result}\n  + ${key}: ${secondData[key]}`;
    }
    return `${result}`;
  }, '');
  return `${resultReduce}${restString}\n}\n`;
};


const diffFiles = (firstFile, secondFile) => {
  const sourceDataFirst = selectParser(getExtFile(firstFile))(fs.readFileSync(firstFile, 'utf8'));
  const sourceDataSecond = selectParser(getExtFile(secondFile))(fs.readFileSync(secondFile, 'utf8'));
  return getDiff(sourceDataFirst, sourceDataSecond);
};

export default diffFiles;
