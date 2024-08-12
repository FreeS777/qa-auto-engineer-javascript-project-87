import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
  const jsonPathFile1 = getFixturePath('file1.json');
  const jsonPathFile2 = getFixturePath('file2.json');
  const yamlPathFile1 = getFixturePath('file1.yml');
  const yamlPathFile2 = getFixturePath('file2.yml');

  const diffResult = genDiff(jsonPathFile1, jsonPathFile2);
  const plainDiffResult = genDiff(yamlPathFile1, yamlPathFile2, 'plain');
  const resultDiffJson = genDiff(jsonPathFile1, jsonPathFile2, 'json');

  const expectedDefault = readFile('result');
  const expectedPlain = readFile('resultPlain');
  const expectedJson = readFile('result.json');
  test.each([
    [expectedDefault, diffResult],
    [expectedPlain, plainDiffResult],
    [expectedJson, resultDiffJson],
  ])('to compare two JSON/yaml files', (expected, result) => {
    expect(result).toEqual(expected);
  });
});
