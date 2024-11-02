export function getObjectKeys<T extends Record<any, any>>(object: T) {
  return Object.keys(object) as (keyof T)[];
}

const test = getObjectKeys({
  key1: "value1",
  key2: "value2",
});
