import json from './jsonparser';
import yaml from './yamlparser';
import ini from './iniparser';

const parsers = { json, yaml, ini };

export default (format, path) => {
  const parser = parsers[format];
  if (!parser) {
    throw new Error(`File format ${format} is not supported`);
  }
  return parser(path);
};
