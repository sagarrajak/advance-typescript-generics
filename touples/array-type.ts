type Keyword = string[];

type Client3 = {
  name: string;
};

type Clients = Array<Client3>;

// Array vs record

type BoolArray = boolean[];
type BooolRecord = { [key: string]: boolean };

type BoolArrayType = BoolArray[number];

//  hybrid of touple and array

// If array first element is 8 or 9 and rest is number

type ANumber = [8 | 9, ...number[]];

const arr: ANumber = [8, 123];

// const arr2: ANumber = [1, 123]

// Touple as a function parameter

type CreateUserParams = [name: string, age?: number, ...address: string[]];

function createUser(...args: CreateUserParams) {}
