// Function that returns an updated map
// for all items with initial quantity at 1.
function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((quantity, item) => {
    map.set(item, quantity === 1 ? 100 : quantity);
  });

  return map;
}

export default updateUniqueItems;
