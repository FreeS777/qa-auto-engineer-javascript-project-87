import plainFormat from './plain.js';
import defaultFormat from './default.js';

export default (format, structure) => {
  switch (format) {
    case 'plain':
      return plainFormat(structure);
    case 'default':
      return defaultFormat(structure);
    case 'json':
      return JSON.stringify(structure, null, 2);
    default:
      throw new Error(`Unknown format '${format}'.`);
  }
};
