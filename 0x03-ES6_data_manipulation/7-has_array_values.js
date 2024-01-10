// Function that returns a boolean
// if all the elements in the array exist within the set.
function hasValuesFromArray(set, array) {
  const status = array.every(element => set.has(element));
  return status;
}

export default hasValuesFromArray;
