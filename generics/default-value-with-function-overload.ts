export const dataObj = {
  key1: "a",
  key2: "b",
  key3: "c",
} as const;

type DataType = keyof typeof dataObj;

function getValue(): (typeof dataObj)["key1"];
function getValue<T extends DataType>(key: T): (typeof dataObj)[T];

function getValue(key: DataType = "key1") {
  return dataObj[key];
}
