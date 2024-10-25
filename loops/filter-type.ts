type OnlyFilter<T> = T extends [infer First, ...infer Rest]
  ? First extends number
    ? [First, ...OnlyFilter<Rest>]
    : OnlyFilter<Rest>
  : [];


type OnlyNumberType = OnlyFilter<[1,2,2,'aga','s',2]>