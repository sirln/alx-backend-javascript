// Function that returns the sum of all the student ids.
function getStudentIdsSum(students) {
  // calculating the sum of student ids using reduce function
  const idSum = students.reduce((sum, student) => sum + student.id, 0);

  return idSum;
}

export default getStudentIdsSum;
