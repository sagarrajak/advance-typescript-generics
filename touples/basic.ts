type AnotherTouple = [string, number, boolean]

type FirstOrSecond = AnotherTouple[0 | 1]

type Values = AnotherTouple[number] // get all values of touples


// concatinating touple 

type Touple1 = [6, 7]

type Touple2 = [8, 9]

type Touple3 = [...Touple1, ...Touple2]


// naming indexs of touple 

type Client2 = [name: string, email: string]

const value2: Client2 = ['sagar', 'rajak']


// optional value in touple 

type ATouple2 = [number, boolean?]

const newValue: ATouple2 = [12]
const newValue2: ATouple2 = [12, true]

