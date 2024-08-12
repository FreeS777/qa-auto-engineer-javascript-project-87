export default (structure) => {
  const cleanStructure = structure.filter((value) => value.type !== 'unchanged');
  const result = cleanStructure
    .flatMap(({
      type, key, pastValue, currentValue,
    }) => {
      switch (type) {
        case 'added':
          return `Property '${key}' was added with value: ${currentValue}`;
        case 'deleted':
          return `Property '${key}' was removed`;
        case 'changed':
          return `Property '${key}' was updated. From ${pastValue} to ${currentValue}`;
        default:
          return '';
      }
    });
  return result.join('\n');
};
