interface Teacher {
  firstName: string; // readonly-like behavior (no reassignment after init)
  lastName: string;  // readonly-like behavior
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // allow any additional property
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
