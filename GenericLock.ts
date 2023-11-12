type RemoveKeys = <Key extends string>(
  value: Key[]
) => <Obj>(values: Obj) => Omit<Obj, Key>;

const removeTypes: RemoveKeys = (value) => {
  return {} as any;
};

const keyRemover = removeTypes(["a", "b"]);

const removedObject = keyRemover({ a: 1, b: 2, c: 3 });

type SeconsRemoveKeyFunc = <Obj>(
  obj: Obj
) => <Key extends keyof Obj>(keys: Key[]) => Omit<Obj, Key>;

const keyRemoverFunc: SeconsRemoveKeyFunc = (values) => {
  return {} as any;
};


const keyRemoverSecond = keyRemoverFunc({a:1, b: 2, c:3})
const removedObj = keyRemoverSecond(['a', 'c']);