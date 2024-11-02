export interface Person {
  type: string;
}

export interface Cutomer extends Person {
  type: "customer";
  customerId: number;
}

export interface Employee extends Person {
  type: "employee";
  jobTitle: string;
}

function assertPersonIsEmployee(
  obj: Employee | Cutomer
): asserts obj is Employee {
  if (obj.type != "employee") {
    throw new Error("Person must be of type employee");
  }
}

const myFunc = function (person: Employee | Cutomer) {
  assertPersonIsEmployee(person);
  console.log(person.jobTitle);
};
