type SelectByCondition<Touple extends unknown[], Conditon> = Touple extends [
  infer F,
  ...infer Rest
]
  ? F extends Conditon
    ? [F, ...SelectByCondition<Rest, Conditon>]
    : SelectByCondition<Rest, Conditon>
  : [];

type example2 = SelectByCondition<["a", "b", "c", 1, 2, true, false], 1 | false>;

type NewType = ["a", "b", "c", 1, 2, true, false];
