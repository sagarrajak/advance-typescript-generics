type ForBackend = {
  publicInfo: string;
  secretInfo: string;
};

// type ForFrontend = {
//   publicInfo: string;
// };

type ForFrontendMap<T> = {
    [Key in Exclude<keyof T, `secret${string}`>]: T[Key]
}

type ForFrontend = ForFrontendMap<ForBackend> 