import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename));

test('difference two JSON files format signs', () => {
  const pathFirstJson = getFixturePath('file1.json');
  const pathSecondJson = getFixturePath('file2.json');
  const result = readFile('resultPlainJson').toString();

  const actual = genDiff(pathFirstJson, pathSecondJson, 'plain');
  expect(actual).toBe(result);
});

test('difference two YAML files format signs', () => {
  const pathFirstYaml = getFixturePath('file1.yml');
  const pathSecondYaml = getFixturePath('file2.yml');
  const result = readFile('resultPlainYaml').toString();

  const actual = genDiff(pathFirstYaml, pathSecondYaml, 'plain');
  expect(actual).toBe(result);
});
