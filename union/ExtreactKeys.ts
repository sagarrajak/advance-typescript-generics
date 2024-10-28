type ExtractKeys<T> = keyof T;

type keys = ExtractKeys<
  { a: string; b: string; c: string } | { d: string; e: string; f: string }
>;

type KK1 = { a: string; b: string; c: string } & {
  d: string;
  e: string;
  f: string;
};
type KKK1 = keyof KK1;

type ExtractKeysOriginal<T> = T extends unknown ? keyof T : never;


type KKK10 =  ExtractKeysOriginal<KK1>
