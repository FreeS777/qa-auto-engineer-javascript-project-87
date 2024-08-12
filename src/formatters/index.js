import plainFormat from './plain.js';
import stylishFormat from './stylish.js';

export default (format, structure) => {
  switch (format) {
    case 'plain':
      return plainFormat(structure);
    case 'stylish':
      return stylishFormat(structure);
    case 'json':
      return JSON.stringify(structure, null, 2);
    default:
      throw new Error(`Unknown format '${format}'.`);
  }
};
