type CheckIfArray<T> = T extends unknown[] ? true : false;

type isArrayType = CheckIfArray<["sagar"]>;

type Conditional<
  Condition extends boolean,
  TrueBranch,
  FalseBranch
> = Condition extends boolean
  ? Condition extends true
    ? TrueBranch
    : FalseBranch
  : TrueBranch | FalseBranch;

type TrueCase = Conditional<true, string, boolean>
type FalseCase = Conditional<false, string, boolean>
type BooleanCase = Conditional<boolean, string, boolean>

