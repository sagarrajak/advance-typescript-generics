type BeginsWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}`
  ? true
  : Str extends `${Prefix}`
  ? true
  : false;


type BeginsWithExample = BeginsWith<"sagarrajakis donkey king", "sagar">
type BeginsWithExample2 = BeginsWith<"sagarrajakis donkey king", "sa">
type BeginsWithExample3 = BeginsWith<"sagarrajakis donkey king", "">