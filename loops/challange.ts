type SymetryAll<T> = { [K in keyof T]: T[K] };

type MergeAll<T, Acc = {}> = T extends [infer First, ...infer Rest]
  ? MergeAll<Rest, SymetryAll<Acc & First>>
  : Acc;

type MergedType = MergeAll<[{a: true}, {b: 2}, {c: "4"}, {d : null}]>


type SplitAtt<T> = T extends [infer First, ...infer Rest] ? [First, Rest] : [];
