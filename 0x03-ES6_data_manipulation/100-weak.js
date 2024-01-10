// Export a const instance of WeakMap and name it weakMap.
const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap };
export { queryAPI };
