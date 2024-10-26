type IsUpperCase<T extends string> = T extends Uppercase<T> ? true : false;


type sagarUpperCase = IsUpperCase<"SaGar">
type sagarUpperCase2 = IsUpperCase<"SAGAR">
type sagarUpperCase3 = IsUpperCase<"saGaR">