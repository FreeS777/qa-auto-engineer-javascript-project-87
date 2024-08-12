import plainFormat from './plain.js';
import defaultFormat from './default.js';

const jsonFormat = (structure) => JSON.stringify(structure, null, 2);
const formatHandlers = {
  plain: plainFormat,
  default: defaultFormat,
  json: jsonFormat,
};

export default (format, structure) => formatHandlers[format](structure);
