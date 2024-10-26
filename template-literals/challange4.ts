type SnakeToCamelCase<T extends string> =
  T extends `${infer First}_${infer Second}`
    ? SnakeToCamelCase<`${First}${Capitalize<Lowercase<Second>>}`>
    : T;

type SnakeToCamel = SnakeToCamelCase<"sagar_rajak_is_king">;
type HelloWord = SnakeToCamelCase<"hello_word">;
type somethingSomething = SnakeToCamelCase<"hello_code_licks_acadamy">;
type somethingSomething2 = SnakeToCamelCase<"Hello">;

type SnakeToCamelCase2<T extends string> =
  T extends `${infer First}_${infer Second}`
    ? SnakeToCamelCase<`${First}${Capitalize<SnakeToCamelCase2<Second>>}`>
    : Capitalize<Lowercase<T>>;




type SnakeToCamel2 = SnakeToCamelCase2<"sagar_rajak_is_king">;
type HelloWord2 = SnakeToCamelCase2<"hello_word">;
type somethingSomething3 = SnakeToCamelCase2<"hello_code_licks_acadamy">;
type somethingSomething22 = SnakeToCamelCase2<"Hello">;
