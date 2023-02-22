import { createContext, useContext, useReducer, useRef } from "react";

import { buildActions } from "./build-actions";
import { counterReducer } from "./reducer";

export const initialState = {
    counter: 0,
    loading: false,
};

const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const actions = useRef(buildActions(dispatch));

    return <CounterContext.Provider value={[state, actions]}>{children}</CounterContext.Provider>;
};

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error("You have to use useCounterContext inside <CounterContextProvider/>");
    }

    return [...context];
};
