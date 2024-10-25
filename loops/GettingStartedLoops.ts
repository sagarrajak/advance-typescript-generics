type Column = {
  name: string;
  values: unknown[];
};

type Table = Column[];

declare const values: [
  {
    name: "username";
    values: string[];
  },
  {
    name: "county";
    values: number[];
  },
  {
    name: "plan";
    values: ["new", "another-new", 1];
  }
];

const values2: Table = [
  {
    name: "username",
    values: ["sagar", "sumit"],
  },
  {
    name: "county",
    values: [91, 86, 92],
  },
  {
    name: "plan",
    values: ["new", "another-new", 1],
  },
];

type ExtractedType<A extends any[], B> = A extends [infer First, ...infer Rest]
  ? First extends { name: B; values: infer VType }
    ? VType
    : ExtractedType<Rest, B>
  : unknown;

// declare function extractTypeNew<A extends Table, B extends string>(
//   table: A,
//   column: B
// ): ExtractedType<A, B>;

function extractTypeNew<A extends Table, B extends string>(
  table: A,
  column: B
): ExtractedType<A, B> | undefined {
  const foundColumn = table.find((col) => col.name === column);
  return foundColumn ? (foundColumn.values as ExtractedType<A, B>) : undefined;
}

const NewValues = extractTypeNew(values, "county");
