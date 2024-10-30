type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

type GetOneKeyValue<T, X extends keyof T> = T[X];

type entrySet = Entries<{ name: "jack"; age: 23 }>;

type FormEntries<T extends [any, any]> = {
  [K in T as K[0]]: K[1];
};

type buildEntry = FormEntries<entrySet>;

type obj = {
  value: string;
  coverter: (val: string) => void;
  sv: () => void;
  unk: boolean;
};

type RemoveFunc<T> = {
  [K in keyof T as T[K] extends (...args: any) => void ? never : K]: T[K];
};

type removedFUn = RemoveFunc<obj>;
