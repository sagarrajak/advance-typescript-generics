type DataColumn = { name: string; values: unknown[] };

type PickColumns<
  T,
  ColumnName extends string,
  Out extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? First extends { name: infer Name }
    ? Name extends ColumnName
      ? PickColumns<Rest, ColumnName, [...Out, First]>
      : PickColumns<Rest, ColumnName, Out>
    : PickColumns<Rest, ColumnName, Out>
  : Out;

type PickedColumns = PickColumns<
  [
    { name: "firstname"; values: string[] },
    { name: "lastName"; values: string[] },
    { name: "others"; values: string[] },
    { name: "something"; values: string[] }
  ],
  "others" | "something"
>;
