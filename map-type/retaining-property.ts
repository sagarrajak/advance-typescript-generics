type FormState = {
  value: string;
  isValid: boolean;
};

type PersonForm = {
  name: FormState;
  email: FormState | null;
};

type ExtractFormValue<T> = T extends { value: infer X } ? X : T extends undefined ? undefined : never;

type TransformForm<T> = {
  [K in keyof T]: ExtractFormValue<T[K]>;
};

type outputData = TransformForm<PersonForm>;
