type FetchOrDetault<Key, Obj extends object, Default> = Key extends keyof Obj
  ? Obj[Key]
  : Default;

type Example5 = FetchOrDetault<"id", { id: string }, "NewId">;

type Example6 = FetchOrDetault<"ide", { id: string }, "NewId">;

type ExtreactNameType<T> = T extends { name: infer V } ? V : undefined;

type Example111 = ExtreactNameType<{ name: { val: string } }>;

type RemoveTheFirstElement<T extends unknown[]> = T extends [any, ...infer X]
  ? X
  : unknown;

type FirstNumberRemove = RemoveTheFirstElement<[string, number, boolean]>;

type LastElementTouple<T extends unknown[]> = T extends [...any, infer Last]
  ? Last
  : never;

type GetLastType = LastElementTouple<[string, boolean, { id: number }]>;



