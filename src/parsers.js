import jsonparser from './parsers/jsonparser';
import yamlparser from './parsers/yamlparser';
import iniparser from './parsers/iniparser';

const formats = {
  json: jsonparser,
  yaml: yamlparser,
  yml: yamlparser,
  ini: iniparser,
};

export default format => formats[format];
