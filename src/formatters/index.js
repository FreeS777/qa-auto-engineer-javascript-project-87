import plainFormat from './plain.js';
import defaultFormat from './default.js';

const formatHandlers = {
  plain: plainFormat,
  default: defaultFormat,
};

export default (format, structure) => formatHandlers[format](structure);
