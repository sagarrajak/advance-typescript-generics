type CombineArray<T extends any[]> =  
    T extends [(infer First)[], ...infer Rest] ? 
        [First, ...CombineArray<Rest>] : []


type CombinedArr = CombineArray<[[true, false], ['first', 'secomnd']]>