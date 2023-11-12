import { String, Union, List} from 'ts-toolbelt'

const queryString  = "/home?a=foo&b=wow";

type Query = typeof queryString;

type SecondQueryPart = String.Split<Query, "?">[1]
type QueryElements = String.Split<SecondQueryPart, "&">


type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, "=">[0]]: String.Split<
      QueryElement,
      "="
    >[1];
  };
}[QueryElements[number]];


type FinalQueryParams = Union.Merge<QueryParams>

type StringArr = {
    sagar: {
        payload: {
            test1: number
        },
        action: string
    },
    sumit: {
        payload: {
            test2: number
        },
        action: number,
        data: string
    }
}

type MergeArr = {
    [Key in keyof StringArr]: {
        code: Key,
    } & StringArr[Key]
}[keyof StringArr]


