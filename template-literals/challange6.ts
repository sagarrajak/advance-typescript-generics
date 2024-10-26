type IndexType = string | number | bigint | boolean;

type Combine<T extends unknown[], S extends string> = T extends [
  infer First,
  ...infer Rest
]
  ? Rest extends []
    ? First
    : First extends IndexType
    ? `${First}${S}${Combine<Rest, S>}`
    : Combine<Rest, S>
  : "";

type combined = Combine<["Sagar", "rajak", true, false, "&"], "|">;

type Seperate<
  Str extends string,
  Seperater extends string
> = Str extends `${infer T}${Seperater}${infer Rest}`
  ? [T, ...Seperate<Rest, Seperater>]
  : [Str];


type seperated = Seperate<"sagar.rajak.kumar", ".">
type seperated2 = Seperate<"sagar.rajak.", ".">