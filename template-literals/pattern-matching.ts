type ExtractFullName<T> = T extends `${infer FirstName} ${infer LastName}`
  ? [FirstName, LastName]
  : T;

type fullName = ExtractFullName<"sagar rajak">;

type TrimSpaces<T extends string> = T extends ` ${infer R} `
  ? TrimSpaces<R>
  : T extends ` ${infer R}`
  ? TrimSpaces<R>
  : T extends `${infer R} `
  ? TrimSpaces<R>
  : T;

type ExtractFullName2<T extends string> =
  TrimSpaces<T> extends `${infer FirstName} ${infer Rest}`
    ? Rest extends `${infer Middle} ${infer LastName}`
      ? [
          TrimSpaces<FirstName>,
          TrimSpaces<`${TrimSpaces<Middle>} ${TrimSpaces<LastName>}`>
        ]
      : [TrimSpaces<FirstName>, TrimSpaces<Rest>]
    : [TrimSpaces<T>, ""];

type fullNameWithoutSpace = ExtractFullName2<" sagar rajak    kumar ">;
type fullNameWithoutSpace2 = ExtractFullName2<" sagar rajak">;

type FindWordOfString<
  T extends string,
  acc extends Record<string, boolean> = {}
> = T extends `${infer First} ${infer Rest}`
  ? FindWordOfString<Rest, acc & { [Key in First]: true }>
  : { [Key in T]: true } & acc;

type AllWordsOfString = keyof FindWordOfString<"sagar rajak is stupied joke">;

type FindWordOfStringWithSpace<
  T extends string,
  acc extends Record<string, boolean> = {}
> = TrimSpaces<T> extends `${infer First} ${infer Rest}`
  ? FindWordOfStringWithSpace<TrimSpaces<Rest>, acc & { [Key in First]: true }>
  : { [Key in TrimSpaces<T>]: true } & acc;

type AllWordsWihtoutSpace =
  FindWordOfStringWithSpace<"sagar  rajak  is   stuped sdsds   sagar sagar ">;

  type AllWordsWihtoutSpace2 =
  FindWordOfStringWithSpace<"sagar  rajak  is   stuped sdsds   sagar sagar ">;


const str  = "sagar  rajak  is   stuped sdsds    ";
type AllWordsOfString2 = FindWordOfStringWithSpace<typeof str>;



type ExtreactLastWord<T extends string> =
  T extends `${infer First} ${infer Second}`
    ? ExtreactLastWord<TrimSpaces<Second>>
    : TrimSpaces<T>;

type lastWord = ExtreactLastWord<"This    must   have   last   word  ">