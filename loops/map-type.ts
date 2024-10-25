type Ids = [{ id: 1; name: "Jack" }, { id: 2; name: "House" }];

type ExtractName<T> = T extends { name: infer NameType } ? NameType : unknown;

type ToName<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [ExtractName<First>, ...ToName<Rest>]
  : [];

type NameTypes = ToName<Ids>