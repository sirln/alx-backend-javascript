// Function that returns a string of all the set values
// that start with a specific string (startString).
function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') return '';
  const filteredValues = Array.from(set).filter((value) => value && value.startsWith(startString));
  const resultString = filteredValues.map((value) => value.replace(startString, '')).join('-');
  return resultString;
}

export default cleanSet;
