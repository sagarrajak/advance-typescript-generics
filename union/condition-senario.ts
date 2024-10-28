type SnakeToCamelCaseNew<T extends string> =
  T extends `${infer First}_${infer Second}`
    ? `${First}${Capitalize<SnakeToCamelCaseNew<Second>>}`
    : T;
type TC1 = SnakeToCamelCaseNew<"sagar_rajak" | "cas2" | "case_is_5">;
