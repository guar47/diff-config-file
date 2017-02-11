import _ from 'lodash';

const getPlainText = (diff, parent) => {
  const path = !parent ? '' : `${parent}.`;
  return diff.reduce((result, element, index) => {
    if (element.action === 'equal' && _.isObject(element.value)) {
      return `${result}${getPlainText(element.value, element.name)}\n`;
    } else if (element.action === 'added' && _.isObject(element.value)) {
      return `${result}Property ${path}${element.name} was added with complex value\n`;
    } else if (element.action === 'removed') {
      return `${result}Property ${path}${element.name} was removed\n`;
    } else if (element.action === 'added') {
      return `${result}Property ${path}${element.name} was added with value: ${element.value}\n`;
    } else if (element.action === 'changedFrom') {
      return `${result}Property ${path}${element.name} was updated. From ${element.value} to ${diff[index + 1].value}\n`;
    }
    return result;
  }, '');
};

export default getPlainText;
