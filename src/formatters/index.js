import sjson from './jsonstringout';
import plain from './plainout';
import json from './jsonout';

const formatters = { sjson, plain, json };

export default (type, diff) => {
  const formatter = formatters[type];
  if (!formatter) {
    throw new Error(`Output format ${type} is not supported`);
  }
  return formatter(diff);
};
