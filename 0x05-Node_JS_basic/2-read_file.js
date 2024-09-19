const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.length > 0);
    const fields = {};
    lines.forEach((line) => {
      const student = line.split(',');
      if (!fields[student[3]]) fields[student[3]] = [];
      fields[student[3]].push(student[0]);
    });
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field].join(', ');
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${list}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
