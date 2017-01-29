import toJsonString from './formatters/jsonstringout';
import toPlainText from './formatters/plainout';
import toJson from './formatters/jsonout';


const types = {
  sjson: toJsonString,
  plain: toPlainText,
  json: toJson,
};

export default (type) => {
  const alarm = types[type];
  if (!alarm) {
    throw new Error(`Output format ${type} is not supported`);
  }
  return types[type];
};
