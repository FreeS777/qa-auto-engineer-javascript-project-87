import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import { cwd } from 'process';
import parser from './utils/parsers.js';
import _ from 'lodash';

const getData = (file) => {
  const fileType = extname(file);
  const normalizedDist = resolve(cwd(), '__fixtures__', file);
  const data = readFileSync(normalizedDist, 'utf-8');
  return parser(data, fileType);
};

const symbols = {
  add: '+',
  del: '-',
  same: ' ',
}

const isSharedKey = (key, obj1, obj2) => _.has(obj1, key) && _.has(obj2, key);
const isAddedKey = (key, obj1, obj2) => !_.has(obj1, key) && _.has(obj2, key);
const isDeletedKey = (key, obj1, obj2) => _.has(obj1, key) && !_.has(obj2, key);
const hasSameValue = (key, obj1, obj2) => obj1[key] === obj2[key];

const formatLine = (symbol, key, value) => `  ${symbol} ${key}: ${value}`;

export default (filename1, filename2) => {
  const obj1 = getData(filename1);
  const obj2 = getData(filename2);
  const allkeys = _.union(_.keys(obj1), _.keys(obj2)).sort();

  const result = allkeys.map((key) => {
    if (isSharedKey(key, obj1, obj2)) {
      return hasSameValue(key, obj1, obj2)
        ? formatLine(symbols.same, key, obj1[key])
        : `${formatLine(symbols.del, key, obj1[key])}\n${formatLine(symbols.add, key, obj2[key])}`;
    }
    if (isAddedKey(key, obj1, obj2)) {
      return formatLine(symbols.add, key, obj2[key]);
    }
    if (isDeletedKey(key, obj1, obj2)) {
      return formatLine(symbols.del, key, obj1[key]);
    }
  });

  return `{\n${result.join("\n")}\n}`;
};
