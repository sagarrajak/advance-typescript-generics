type CheckIfPath<T> = T extends `:${infer str}/${string}`
  ? str
  : T extends `:${infer str}`
  ? str
  : never;
type CheckIfOtherExist<T> = T extends `${string}/${infer other}`
  ? other
  : never;

type ExtractParams<
  T extends string,
  Acc extends Record<string, any> = {}
> = T extends `${infer First}/${infer Other}`
  ? ExtractParams<
      Other,
      First extends `:${infer Second}` ? Acc & { [K in Second]: string } : Acc
    >
  : T extends `${infer NewFirst}`
  ? NewFirst extends `:${infer Second}`
    ? Acc & { [K in Second]: string }
    : Acc
  : Acc;

type params = ExtractParams<"user/:userId/dashboard/:dashboardId">
type params2 = ExtractParams<"user/:userId/dashboard/:dashboardId/:someotherId">
type params3 = ExtractParams<":userId/dashboard/:dashboardId/:someotherId">



type ExtractParams2<T extends string> =
  T extends `${infer First}/${infer Second}`
    ? ExtractParams<First> & ExtractParams<Second>
    : T extends `:${infer URL}`
    ? { [K in URL]: string }
    : {};

type params32 = ExtractParams2<"user/:userId/dashboard/:dashboardId">
type params23 = ExtractParams2<"user/:userId/dashboard/:dashboardId/:someotherId">
type params33 = ExtractParams2<":userId/dashboard/:dashboardId/:someotherId">
