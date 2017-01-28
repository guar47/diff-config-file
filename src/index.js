import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import selectParser from './parsers';

const getExtFile = file => path.extname(file).replace('.', '');

const getDiff = (firstData, secondData) => {
  const keys = _.union(_.keys(firstData), _.keys(secondData));
  const resultMap = keys.reduce((result, key) => {
    if (firstData[key] === secondData[key]) {
      result.push({ name: key, value: firstData[key], action: ' ' });
    } else if (firstData[key] instanceof Object && secondData[key] instanceof Object) {
      result.push({ name: key, value: getDiff(firstData[key], secondData[key]), action: ' ' });
    } else if (firstData[key] === undefined) {
      result.push({ name: key, value: secondData[key], action: '+' });
    } else if (secondData[key] === undefined) {
      result.push({ name: key, value: firstData[key], action: '-' });
    } else if (firstData[key] !== secondData[key]) {
      result.push({ name: key, value: firstData[key], action: '-' }, { name: key, value: secondData[key], action: '+' });
    } return result;
  }, []);
  return resultMap;
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

// TODO :Надо придумать решение как избавиться от replace(/"/g, '') =>
// (из сравнения возвращаются значения в " ")
const toString = Json => JSON.stringify(serialize(Json), null, 3).replace(/"/g, '').replace(/,/g, '');

const diffFiles = (firstFile, secondFile) => {
  const sourceDataFirst = selectParser(getExtFile(firstFile))(fs.readFileSync(firstFile, 'utf8'));
  const sourceDataSecond = selectParser(getExtFile(secondFile))(fs.readFileSync(secondFile, 'utf8'));
  return toString(getDiff(sourceDataFirst, sourceDataSecond));
};


export default diffFiles;
