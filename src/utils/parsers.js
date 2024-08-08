import yaml from 'js-yaml';

const formatters = {
  '.json': JSON.parse,
  '.yaml': yaml.load,
  '.yml': yaml.load,
};

export default (data, type) => formatters[type](data);
