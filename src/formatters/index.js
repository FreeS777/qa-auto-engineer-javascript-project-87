import plainFormat from './plain.js';

const formatHandlers = {
  plain: plainFormat,
};

export default (format) => formatHandlers[format];
