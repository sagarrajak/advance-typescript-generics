type ExtractProps<T, Acc = {}> = T extends [infer First, ...infer Rest]
  ? ExtractProps<
      Rest,
      First extends [infer FKey, infer SValue]
        ? FKey extends string | number | symbol
          ? Acc & { [K in FKey]: SValue }
          : Acc
        : Acc
    >
  : Acc;

type Symetry<T> = { [F in keyof T]: T[F] };

type NewProps = Symetry<
  ExtractProps<
    [["key1", true], ["key2", false], ["key4", "something"], ["key10", string]]
  >
>;
