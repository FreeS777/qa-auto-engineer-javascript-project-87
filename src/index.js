import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import { cwd } from 'process';
import parser from './utils/parsers.js';
import getStructure from './diffObjects.js';
import getFormatHandler from './formatters/index.js';

export const getData = (file) => {
  const fileType = extname(file);
  const normalizedDist = resolve(cwd(), '__fixtures__', file);
  const data = readFileSync(normalizedDist, 'utf-8');
  return parser(data, fileType);
};
export default (filename1, filename2, format = 'stylish') => {
  const firstObj = getData(filename1);
  const secondObj = getData(filename2);
  const structure = getStructure(firstObj, secondObj);
  return getFormatHandler(format, structure);
};
