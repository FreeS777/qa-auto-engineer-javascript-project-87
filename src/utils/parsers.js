const formatters = {
  '.json': JSON.parse,
};

export default (data, type) => formatters[type](data);