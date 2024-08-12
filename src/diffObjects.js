import _ from 'lodash';

export default (firstObj, secondObj) => {
  const allKeys = _.union(_.keys(firstObj), _.keys(secondObj));
  const sortedKeys = _.sortBy(allKeys);
  return sortedKeys.map((key) => {
    const pastValue = firstObj[key];
    const currentValue = secondObj[key];
    if (!_.has(secondObj, key)) return { type: 'deleted', key, pastValue };
    if (!_.has(firstObj, key)) return { type: 'added', key, currentValue };
    if (pastValue !== currentValue) {
      return {
        type: 'changed', key, pastValue, currentValue,
      };
    }
    return { type: 'unchanged', key, pastValue };
  });
};
