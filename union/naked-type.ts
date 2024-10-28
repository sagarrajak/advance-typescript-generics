// conditonal type only distribute over union type when they directly applied to a naked type 

type NT = string | number extends number ? true :  false

type NTNaked<T> = T extends string ? true : false;

type NNTT = NTNaked<string | number>