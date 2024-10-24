type AllTrue<A, B> = [A, B] extends true[] ? true : false;


type IsAllTrue = AllTrue<true, false>


type UnWrapNestedArray<ArrayType extends any[]> = ArrayType extends (infer X)[][]
  ? X[]
  : ArrayType;



type UnwrapType = UnWrapNestedArray<number[][]>