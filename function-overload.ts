export function compose<Input, FirtArg>(
  func: (input: Input) => FirtArg
): (input: Input) => FirtArg;

export function compose<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: FirstArg) => SecondArg;

export function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): (Input: Input) => ThirdArg;

export function compose(...args: any[]) {
  return {} as any;
}


const addOne = (a: number) => String(a + 1)
const mul = (s: number) => parseFloat((s+s)+'');

const x = compose(addOne, mul);