// Function that returns an array of students for a specific city with their new grade
function updateStudentGradeByCity(students, city, newGrades) {
  const newStudentGrades = students.filter(student => student.location === city)
    .map(student => {
      const studentGrade = newGrades.find(grade => grade.studentId === student.id);

      if (studentGrade) {
        return { ...student, grade: studentGrade.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    });
  return newStudentGrades;
}

export default updateStudentGradeByCity;
