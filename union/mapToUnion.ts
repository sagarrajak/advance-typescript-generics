type Dublicate<T> = [T, T];
type DistributedDubicate<T> = T extends unknown ? [T, T] : never;

type D1 = Dublicate<1 | 2 | 3>;

type DD1 = DistributedDubicate<1 | 2 | 3>;
