type IsTuple<T> = T extends readonly [...infer _] ? true : false;

type GetFirstElements<T extends unknown[]> = T[0];

type FirstElementType = GetFirstElements<[string, number]>;

type FirstElementType2 = GetFirstElements<[]>;

// add to the end

type AddToTheEnd<Touple extends any[], E> = [...Touple, E];

type LastObjectType = AddToTheEnd<[string, number], { [key: string]: string }>;

const element: LastObjectType = ["ssagar", 12, { name: "sagar" }];

// combine touple 

// covert touple to an array 

type ConvertToupleToArray<T extends unknown[]> = T[number][]

type Array1 = ConvertToupleToArray<[1,2,3]>


type NonEmptyList<T> = [T, ...others: T[]] 

const arr2: NonEmptyList<string> = ['sagar', 'rajak']


// Get the length of the touple 

type ToupleLength<T extends unknown[]> = T['length']



// extended length 

type ToupleExtendedlength<T extends unknown[]> = [T[0], ...T]['length']


type ToupleExtendLengthExample = ToupleExtendedlength<[1,2,3]>