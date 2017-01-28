import yaml from 'yamljs';
import ini from 'ini-config-parser';

const formats = {
  json: data => JSON.parse(data),
  yaml: data => yaml.parse(data),
  yml: data => yaml.parse(data),
  ini: data => ini.parse(data),
};

export default format => formats[format];
