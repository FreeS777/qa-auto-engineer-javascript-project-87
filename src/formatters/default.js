export default (structure) => {
  const result = structure
    .flatMap(({
      type, key, pastValue, currentValue,
    }) => {
      switch (type) {
        case 'deleted':
          return `  - ${key}: ${pastValue}`;
        case 'added':
          return `  + ${key}: ${currentValue}`;
        case 'changed':
          return `  - ${key}: ${pastValue}\n  + ${key}: ${currentValue}`;
        default:
          return `    ${key}: ${pastValue}`;
      }
    });
  return `{\n${result.join('\n')}\n}`;
};
