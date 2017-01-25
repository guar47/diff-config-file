// @flow
/* eslint no-bitwise: ["error", { "allow": ["~"] }] */

import fs from 'fs';
import yamljs from 'yamljs';

const parseToObject = (file) => {
  const readed = fs.readFileSync(file, 'utf8');
  if (~file.indexOf('.json')) {
    return JSON.parse(readed);
  } else if (~file.indexOf('.yml') || ~file.indexOf('.yaml')) {
    return yamljs.parse(readed);
  }
  return false;
};

export default parseToObject;
