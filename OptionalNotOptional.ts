interface GlobalReducerEvent {
  LOG_IN: {
    payload: {
      data: string;
      value: number;
    };
  };
  LOG_OUT: {
    payload: {
      chars: string[];
    };
  };
}

export type GlobalReducer<TState>  = (
  state: TState,
  event: {
    [EventType in keyof GlobalReducerEvent]: {
      type: EventType;
    } & GlobalReducerEvent[EventType];
  }[keyof GlobalReducerEvent]
) => TState;

const basicReducer: GlobalReducer<{todos: {id: string, name: string, description: string}}> = (state, event) => {
    
    if (event.type == "LOG_IN") {
        event.payload
    }
    if (event.type == "LOG_OUT") {
        event.payload
    }
    return state;
}

