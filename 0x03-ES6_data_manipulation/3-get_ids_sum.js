export default function getStudentIdsSum(students) {
  if (!(students instanceof Array)) {
    return 0;
  }
  return students.reduce((sum, student) => sum + student.id, 0);
}
