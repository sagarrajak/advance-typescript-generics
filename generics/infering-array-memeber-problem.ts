// type GetArrayType<> = T extends (infer F)[] ? F : never;

const buildStat = <T extends string>(state: T[]) => {
  return state;
};


export const state = buildStat(["Pending", 'Failed', 'Success'])