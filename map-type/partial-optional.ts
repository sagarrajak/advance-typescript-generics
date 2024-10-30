type PartialOptional<T, K extends keyof T> = {
  [F in keyof T as F extends K ? F : never]: T[F];
} & {
  [F in keyof T as F extends K ? never : F]?: T[F];
};



type PartialOptional2<T, K extends keyof T> = {
  [F in Exclude<keyof T, K>]: T[F];
} & {
  [F in K]?: T[F];
};


type employeeOpt = PartialOptional2<
  { first_name: string; last_name: string; email: string },
  "email" | 'last_name'
>;