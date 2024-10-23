type Props3 = { value: string; focused: boolean; edited: boolean };

type ExtractKeys<T> = keyof T;

type Props3Keys = ExtractKeys<Props3>; 


type ExtractValues = 