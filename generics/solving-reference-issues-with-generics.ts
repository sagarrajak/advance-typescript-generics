const myFunc = <T, F extends keyof T>(object: T, key: F) => {
  return object[key];
};

const dataObj = {
    key1: true,
    key2: "some string",
    key3: 132
}

const test = myFunc(dataObj, 'key1');
const test2 = myFunc(dataObj, 'key2');
const test3 = myFunc(dataObj, 'key3');


