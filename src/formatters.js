import _ from 'lodash';

const serialize = (diff) => {
  const signs = { equal: ' ', added: '+', removed: '-', changedFrom: '-', changedTo: '+' };
  const getJson = diff.reduce((result, element) => {
    if (_.isArray(element.value)) {
      return { ...result, [`${signs[element.action]} ${element.name}`]: serialize(element.value) };
    }
    return { ...result, [`${signs[element.action]} ${element.name}`]: element.value };
  }, {});
  return getJson;
};
const toJsonString = Json => JSON.stringify(serialize(Json), null, 3).replace(/"/g, '').replace(/,/g, '');

const toPlainText = (diff, parent) => {
  const path = _.isUndefined(parent) ? '' : `${parent}.`;
  return diff.reduce((result, element, index) => {
    if (element.action === 'equal' && _.isObject(element.value)) {
      return `${result}${toPlainText(element.value, element.name)}\n`;
    } else if (element.action === 'added' && _.isObject(element.value)) {
      return `${result}Property ${path}${element.name} was added with complex value\n`;
    } else if (element.action === 'removed') {
      return `${result}Property ${path}${element.name} was removed\n`;
    } else if (element.action === 'added') {
      return `${result}Property ${path}${element.name} was added with value: ${element.value}\n`;
    } else if (element.action === 'changedFrom') {
      return `${result}Property ${path}${element.name} was updated. From ${element.value} to ${diff[index + 1].value}\n`;
    } return result;
  }, '');
};

const types = { json: toJsonString, plain: toPlainText };

export default type => types[type];
