// Require Object type

type Props = { value: string; focused: boolean; edited: boolean };

type Props2 = { value: string; focused: boolean; };

type MyPartial<T extends object> = { [F in keyof T]?: T[F] };

type MyPick<T extends object, K extends keyof T> = { [F in K]: T[F] };

type PartialProps = Partial<Props>;

type PartialProps2 = MyPartial<Props>;

type PickedTypes = MyPick<Props, "edited" | "focused">;

type MyAwaited<T> = T extends Promise<infer X> ? X : unknown;

type PromiseResponse = MyAwaited<Promise<{ string: boolean }>>;

type MyOmit<T extends Object, K extends keyof T> = {[F in Exclude<keyof T, K>]: T[F]}

type Omitted = MyOmit<Props, 'edited'>

type MyExclude<T, U> = T extends U ? never : T
