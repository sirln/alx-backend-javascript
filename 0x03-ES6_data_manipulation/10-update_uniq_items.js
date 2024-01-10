// Function that returns an updated map
// for all items with initial quantity at 1.
function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  map.forEach((quantity, item) => {
    updatedMap.set(item, quantity === 1 ? 100 : quantity);
  });

  return updatedMap;
}

export default updateUniqueItems;
