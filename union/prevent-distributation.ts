type Extends<A, B> = A extends B ? true : false;
type ExtendsWithoutDistribution<A, B> = [A] extends [B] ? true : false;

type Ex = Extends<'a' | 'b' | 'c', 'a' | 'b'>
type Ex2 = ExtendsWithoutDistribution<'a' | 'b' | 'c', 'a' | 'b'>