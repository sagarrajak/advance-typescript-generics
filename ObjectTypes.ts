const ObjectKeys = {
  a: 1,
  b: false,
  c: "sagar",
};

const getKeys = <Obj extends Object>(value: Obj) => {
  return Object.keys(value) as (keyof Obj)[];
};


const value = getKeys(ObjectKeys)
