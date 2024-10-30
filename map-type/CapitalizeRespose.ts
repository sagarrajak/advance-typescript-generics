type apiResponse = {
  product_name: "some string";
  shop: { shop_name: "string" };
  value_fuck_it: string | number | boolean | Record<string, any>
};

type CamelCase<T> = T extends `${infer First}_${infer Second}`
  ? `${First}${Capitalize<CamelCase<Second>>}`
  : T;

type Flatten<T> = {[K in keyof T]: T[K]} 

type Camalize<T extends Record<string, unknown>> = {
  [K in keyof T as CamelCase<K>]: T[K] extends Record<string, unknown>
    ? Camalize<T[K]>
    : T[K];
};


type camalizeType = Camalize<apiResponse>
