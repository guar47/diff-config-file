import fs from 'fs';
import path from 'path';
import selectParser from './parsers';

const getExtFile = file => path.extname(file).replace('.', '');

// note: Надо придумать решение как избавиться от If в сравнении файлов
// Попробовать использовать lodash.union для совмещения ключей
const getDiff = (firstData, secondData) => {
  const keysFirst = Object.keys(firstData);
  const keysSecond = Object.keys(secondData);
  const resultReduce = keysFirst.reduce((result, key) => {
    if (keysSecond.includes(key) &&
      firstData[key] instanceof Object && secondData[key] instanceof Object) {
      return [...result, { name: key, value: getDiff(firstData[key], secondData[key]), children: true, action: ' ' }];
    } else if (!keysSecond.includes(key) && firstData[key] instanceof Object) {
      return [...result, { name: key, value: firstData[key], children: false, action: '-' }];
    } else if (keysSecond.includes(key) && firstData[key] === secondData[key]) {
      return [...result, { name: key, value: firstData[key], children: false, action: ' ' }];
    } else if (!keysSecond.includes(key) && firstData[key] !== secondData[key]) {
      return [...result, { name: key, value: firstData[key], children: false, action: '-' }];
    } else if (keysSecond.includes(key) && firstData[key] !== secondData[key]) {
      return [...result, { name: key, value: firstData[key], children: false, action: '-' },
      { name: key, value: secondData[key], children: false, action: '+' }];
    }
    return result;
  }, []);
  const resultDiff = keysSecond.reduce((result, key) => {
    if (!keysFirst.includes(key) && secondData[key] instanceof Object) {
      return [...result, { name: key, value: secondData[key], children: false, action: '+' }];
    } else if (!keysFirst.includes(key)) {
      return [...result, { name: key, value: secondData[key], children: false, action: '+' }];
    }
    return result;
  }, resultReduce);
  return resultDiff;
};

const serialize = (diff) => {
  const getJson = diff.reduce((result, element) => {
    if (element.value instanceof Array) {
      return { ...result, [`${element.action} ${element.name}`]: serialize(element.value) };
    }
    return { ...result, [`${element.action} ${element.name}`]: element.value };
  }, {});
  return getJson;
};

// note: Надо придумать решение как избавиться от replace(/"/g, '') =>
// (из сравнения возвращаются значения в " ")
const toString = Json => JSON.stringify(serialize(Json), null, 3).replace(/"/g, '').replace(/,/g, '');

const diffFiles = (firstFile, secondFile) => {
  const sourceDataFirst = selectParser(getExtFile(firstFile))(fs.readFileSync(firstFile, 'utf8'));
  const sourceDataSecond = selectParser(getExtFile(secondFile))(fs.readFileSync(secondFile, 'utf8'));
  return toString(getDiff(sourceDataFirst, sourceDataSecond));
};


export default diffFiles;
