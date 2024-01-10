// Defining the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating 2 students(variables)
const student_1: Student = {
  firstName: "San";
  lastName: "Siro";
  age: 20;
  location: "Italy";
}

const student_2: Student = {
  firstName: "Cinta";
  lastName: "Ciro";
  age: 25;
  location: "Egypt";
}

// studentsList Array with the 2 variable declared above
const studentsList: Student[] = [student_1, student_2];

// Readering a table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Creating a table element
  const table = document.createElement("table");

  // adding a header row with column names
  const headerRow = table.insertRow();
  const firstNameHeader = headerRow.insertCell(0);
  firstNameHeader.textContent = "First Name";
  const locationHeader = headerRow.insertCell(1);
  locationHeader.textContent = "Location";

  // adding a row for each student in the array
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    firstNameCell.textContent = student.firstName;
    const locationCell = row.insertCell(1);
    locationCell.textContent = student.location;
  });

  // adding the table to the document body
  document.body.appendChild(table);
});
