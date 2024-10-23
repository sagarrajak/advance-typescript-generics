type Client = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type Age = Client["age"];
type Role = Client["isAdmin"];

type AgeOrIsAdmin = Client["age" | "isAdmin"];
type ClientValues = Client[keyof Client];

type ValueOf<Obj> = Obj[keyof Obj];

// make a property optional

type Product = { title: string; tages?: string[] };

const prod: Product = {
  title: "sagar",
};

type FourTypeOfDataStructure =
  | { key: string; key2: string } // object
  | { [key: string]: boolean } // record
  | [string, number, boolean]; // touple



// 