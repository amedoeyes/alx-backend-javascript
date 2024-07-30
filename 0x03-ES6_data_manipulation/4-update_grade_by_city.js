export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(students instanceof Array)) {
    return [];
  }
  const studentsByCity = students.filter(
    (student) => student.location === city,
  );
  return studentsByCity.map((student) => {
    for (const grade of newGrades) {
      if (grade.studentId === student.id) {
        return { ...student, grade: grade.grade };
      }
    }
    return { ...student, grade: 'N/A' };
  });
}
