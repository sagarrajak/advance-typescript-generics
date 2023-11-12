export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? "f" : TType;

type WithoutC = RemoveC<Letters>;

export const getDeepValues = <
  Object,
  FirstKey extends keyof Object,
  SecondKey extends keyof Object[FirstKey]
>(
  obj: Object,
  firstKey: FirstKey,
  sec: SecondKey
) => {
  return {};
};

const Obj = {
  foo: {
    a: 1,
    b: 2,
    c: 3,
  },
  bar: {
    c: 2,
    d: 4,
  },
  accept: {
    g: 1,
  },
};

 getDeepValues(Obj, 'bar', 'd')
