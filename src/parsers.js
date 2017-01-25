import yamljs from 'yamljs';
import ini from 'ini';

const formats = {
  json: data => JSON.parse(data),
  yaml: data => yamljs.parse(data),
  yml: data => yamljs.parse(data),
  ini: data => ini.parse(data),
};

export default format => formats[format];
