type NewType2 = ["a", "b", "c", 1, 2, true, false];

type MapWithIndex<
  Touple extends any[],
  Out extends any[] = []
> = Touple extends [...infer Rest, infer First]
  ? MapWithIndex<Rest, [[First, Touple["length"]], ...Out]>
  : Out;

type mappedIndex = MapWithIndex<NewType2>