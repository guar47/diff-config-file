import _ from 'lodash';

const serialize = (diff) => {
  const signs = { equal: ' ', added: '+', removed: '-', changedFrom: '-', changedTo: '+' };
  const getJson = diff.reduce((result, element) => {
    if (_.isArray(element.value)) {
      return { ...result, [`${signs[element.action]}${element.name}`]: serialize(element.value) };
    }
    return { ...result, [`${signs[element.action]}${element.name}`]: element.value };
  }, {});
  return getJson;
};

export default Json => JSON.parse(JSON.stringify(serialize(Json))) ;
