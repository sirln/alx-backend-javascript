// Defining the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstLetter}. ${fullLastName}`;
};

//const printTeacher: PrintTeacherFunction = (firstName, lastName) =>
//  `${firstName.charAt(0).toUpperCase()}. ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`;

//const printTeacher: PrintTeacherFunction = function(firstName, lastName) {
//  const firstLetter = firstName.charAt(0).toUpperCase();
//  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
//  return `${firstLetter}. ${fullLastName}`;
//};

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentClassConstructor = class implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
};
