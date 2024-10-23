type RecordOfBools = { [key: string]: boolean };
type SecondRecordOfBools = Record<string, boolean>;

type LoadingState<T> = { [F in keyof T]: T[F] }

type newType = LoadingState<{ loading: boolean; success: string } & { something: boolean}>;

type NewLoadingState = { [key in "success" | "loading" | "error"]: boolean };

type SecondTypeOfLoadingState = Record<
  "success" | "loading" | "error",
  boolean
>;
