type If<A extends boolean, B, C> = A extends true ? B : C;

type GetColor<T extends 0 | 1 | 2 | 3> = {
  0: "green";
  1: "blue";
  2: "yellow";
  3: "white";
}[T];

type Color = GetColor<1>;

// check  if type is assignable or not
// pattern mathcing

type IsProduct<T> = T extends { title: string; price: number } ? true : false;

// Infer keyword using touple

type Head<T extends unknown[]> = T extends [infer First, ...unknown[]]
  ? First
  : unknown;

type Example1 = Head<[string, number]>;

type Example2 = Head<[number, number, number]>;

type Example3 = Head<["string", "nuymber"]>;

// type extraction with function

type IsEqual = (a: number, b: number) => boolean;

type MyReturnType<T extends Function> = T extends (
  ...params: infer P
) => infer X
  ? [P, X]
  : unknown;

type ReturnTypeSomething = MyReturnType<IsEqual>;
