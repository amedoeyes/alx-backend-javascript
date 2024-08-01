export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

export const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

export const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'California',
};

export const studentsList: Student[] = [student1, student2];

export function renderTable() {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    cell1.appendChild(document.createTextNode(student.firstName));
    cell2.appendChild(document.createTextNode(student.location));
    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  document.body.appendChild(table);
}
