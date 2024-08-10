import _ from 'lodash';
import {
  isSharedKey,
  hasSameValue,
  isAddedKey,
  isDeletedKey,
  getData,
} from '../index.js';

export default (filename1, filename2) => {
  const obj1 = getData(filename1);
  const obj2 = getData(filename2);
  const allkeys = _.union(_.keys(obj1), _.keys(obj2)).sort();

  const result = allkeys
    .map((key) => {
      if (isSharedKey(key, obj1, obj2) && !hasSameValue(key, obj1, obj2)) {
        return `Property '${key}' was updated. From ${obj1[key]} to ${obj2[key]}`;
      }
      if (isAddedKey(key, obj1, obj2)) {
        return `Property '${key}' was added with value: ${obj2[key]}`;
      }
      if (isDeletedKey(key, obj1, obj2)) {
        return `Property '${key}' was removed`;
      }
      return '';
    })
    .filter((value) => value !== '');

  return `${result.join('\n')}`;
};
