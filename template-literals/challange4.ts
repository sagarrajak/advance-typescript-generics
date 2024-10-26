type SnakeToCamelCase<T extends string> =
  T extends `${infer First}_${infer Second}`
    ? SnakeToCamelCase<`${First}${Capitalize<Lowercase<Second>>}`>
    : T;

type SnakeToCamel = SnakeToCamelCase<"sagar_rajak_is_king">;
type HelloWord = SnakeToCamelCase<"hello_word">
type somethingSomething = SnakeToCamelCase<"hello_code_licks_acadamy">
type somethingSomething2 = SnakeToCamelCase<"Hello">
