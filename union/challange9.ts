import { Equal, Expect } from "..";

type TableColumn = { name: string; values: unknown[] };

type GetColumName<Table> = Table extends [infer First, ...infer Rest]
  ? First extends TableColumn
    ? [First["name"], ...GetColumName<Rest>]
    : []
  : [];

type GetColumValues<Table, Names> = Table extends {
  name: Names;
  values: (infer T)[];
}
  ? T[]
  : never;

  type GetColumValues2<Table, Names> = Table extends {
    name: Names;
  }
    ? Table
    : never;
  

declare function getColumnValues<
  Table extends [TableColumn, ...TableColumn[]],
  ColName extends string
>(table: Table, columnName: ColName): GetColumValues2<Table[number], ColName>['values'];

// Example table definition
declare const exampleTable: [
  { name: "firstName"; values: string[] },
  { name: "lastName"; values: string[] },
  { name: "age"; values: number[] }
];

type columnsName = GetColumName<typeof exampleTable>

// Test cases to verify the functionality
const result1 = getColumnValues(exampleTable, "age");
type test1 = Expect<Equal<typeof result1, number[]>>;

const result2 = getColumnValues(exampleTable, "firstName");
type test2 = Expect<Equal<typeof result2, string[]>>;

// Test with variable column name
declare const columnName: "firstName" | "age";
const result3 = getColumnValues(exampleTable, columnName);
type test3 = Expect<Equal<typeof result3, string[] | number[]>>;
