import { createContext, useContext, useState } from "react";

export const initialState = {
    counter: 0,
    loading: false,
};

const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useState(initialState);

    return <CounterContext.Provider value={[state, dispatch]}>{children}</CounterContext.Provider>;
};

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error("You have to use useCounterContext inside <CounterContextProvider/>");
    }

    return [...context];
};
