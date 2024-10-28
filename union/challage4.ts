// type NoFaly<T> = T extends [...infer F]
//   ? F
//

type FalsyValues = null | undefined | "" | false
declare function ExcludeFalsy<Item>(params: Item[]): Exclude<Item, FalsyValues>[];

const data = ExcludeFalsy(['false', 'string', undefined, null, "", true])
