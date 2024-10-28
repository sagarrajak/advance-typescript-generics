type ExtreactValues<T extends Record<any, any>> = T extends unknown
  ? T[keyof T]
  : never;

type extractedValues = ExtreactValues<
  { a: "value 1" } | { b: string } | { b: number } | { c: boolean }
>;

type EnumString<A extends string> = A | Omit<string, A>;

declare type ENUMST = EnumString<"Sagar" | "rajak">;

type ExtractValue<T> = T extends unknown
  ? {
      status: T;
      isLoading: T extends "loading" ? true : false;
      data: T extends "success" ? string : undefined;
      error: T extends "error" ? Error : undefined;
    }
  : never;


type EE212 = ExtractValue<'success' | 'loading'>