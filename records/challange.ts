type Props3 = { value: string; focused: boolean; edited: boolean };

type ExtractKeys<T> = keyof T;

type Props3Keys = ExtractKeys<Props3>;

type ExcludeId<T> = { [F in Exclude<keyof T, "id">]: T[F] };

type Excluded = ExcludeId<{
  id: number;
  name: string;
  age: number;
}>;

type OptionalizeId<T extends { id: unknown }> = Omit<T, "id"> & {
  id?: T["id"];
};

type OptionalizeId2<T extends { id: unknown }> = Omit<T, "id"> &
  Partial<Pick<T, "id">>;
  

type AddIdOption = OptionalizeId<{
  id: number;
  name: string;
  age: number;
}>;

type AddIdOption2 = OptionalizeId2<{
    id: number;
    name: string;
    age: number;
  }>;
  

export type MergeAndOverride<A, B> = Omit<A, keyof B> & B


const combineTwoObject = <A, B>(obj1: A, obj2: B): MergeAndOverride<A, B> => {
    return {...obj1, ...obj2};
}


const mergedObj = combineTwoObject({'id': 1, name: 'sagar'}, {'id': 'someid', value: 12345});
