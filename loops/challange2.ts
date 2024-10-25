//
type PromiseWaitForAll<T, Out extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends Promise<infer PType>
    ? PromiseWaitForAll<Rest, [...Out, PType]>
    : PromiseWaitForAll<Rest, Out>
  : Promise<Out>;


type NewPromise = PromiseWaitForAll<[Promise<string>, Promise<number>, Promise<{a: number}>]>