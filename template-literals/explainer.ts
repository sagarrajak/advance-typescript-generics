type Action =  "GET" | "POST"
type Entity = "product" | "order"


type AtributeName = `${Lowercase<Action>}${Capitalize<Entity>}`

type HTTPService = Record<AtributeName, Function>


// computing  object peoperty 




