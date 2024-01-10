// Function that returns an array of objects.
function getListStudentIds(students) {
  // check if argument is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // extracting ids using the map function
  const ids = students.map((student) => student.id);

  return ids;
}

export default getListStudentIds;
