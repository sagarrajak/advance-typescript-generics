type WithName = { name: string, id: string };
type WithAge = { age: number, id: string };
type WithRole = { isAdmin: boolean };

type ClientNew = WithAge & WithAge & WithRole;

type Company = WithName & WithAge;

// two check if two record have one common property

type MergeWithErrorIfDuplicate<A, B> = Extract<keyof A, keyof B> extends never
  ? A & B
  : { ERROR: `Common properties found` };


type Employee = {
    name: string,
    email: string,
    id: string
}


type User = {
    name: string,
}



// type something = MergeWithErrorIfDublicate<Employee, User>