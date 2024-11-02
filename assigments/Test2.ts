type Test2 = number | string extends {} ? true : false;
type Test3 = number | string extends object ? true : false;
type Test4 = string[] extends (string | number)[] ? true : false;
type Test5 = [1, 2, 3, 4] extends [number, number, number, number] ? true : false

type Test6 = [] extends string[] ? true : false

type Test7 = string[] extends [string, ...string[]] ? true : false;
type Test8 = number[] extends readonly number[] ? true : false;
type Test10 = [1, 2] extends number[] & { length: 2 } ? true : false;
