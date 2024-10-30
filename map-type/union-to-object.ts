type Chars = "a" | "b" | "c";

type CharToObject = {
  [K in Chars]: K;
};

type CharToUnion = {
  [K in Chars]: [K, K];
};

type Person = {
  name: string;
  email: string;
};

type NullableObject<T> = {
  [K in keyof T]?: T[K];
};

type NullablePerson = NullableObject<Person>;

type GetNullable<T> = {
  [K in keyof T as T[K] extends NonNullable<T[K]> ? never : K]: T[K];
};


type Employee3 = {
    first_name: string,
    last_name: string,
    phone?: string,
    country_code?: string
}

type NullableEmployee = GetNullable<Employee3>