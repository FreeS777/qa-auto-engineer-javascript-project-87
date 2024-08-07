import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import { cwd } from 'process';
import parser from './utils/parsers.js';

const getData = (file) => {
  const fileType = extname(file);
  const normalizedDist = resolve(cwd(), '__fixtures__', file);
  const data = readFileSync(normalizedDist, 'utf-8');
  return parser(data, fileType);
};

export default (filename1, filename2) => {
  const filePath1 = getData(filename1);
  console.log(filePath1['host'], '!!!!!!!!!');
  const filePath2 = getData(filename2);
  console.log(filePath2, '+++++');
};
