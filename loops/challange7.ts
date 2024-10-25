type TakeFirstN<
  Touple extends any[],
  N extends number,
  Output extends any[] = []
> = Output["length"] extends N
  ? Output
  : Touple extends [infer First, ...infer Rest]
  ? TakeFirstN<Rest, N, [...Output, First]>
  : Output;


  type TakeFirst3 = TakeFirstN<[1, 2, '1', boolean, string], 6>