import { initialState } from ".";
import * as actions from "./actions";

export const CounterReducer = (state, action) => {
    switch (action.types) {
        case actions.INCREASE:
            return { ...state, counter: state.counter + 1 };
        case actions.DECREASE:
            return { ...state, counter: state.counter - 1 };
        case actions.RESET:
            return { ...initialState };
        case actions.SET_COUNTER:
            return { ...state, ...action.payload };
        case actions.ASYNC_INCREASE_START:
            return { ...state, loading: true };
        case actions.ASYNC_INCREASE_END:
            return { ...state, loading: false, counter: state.counter + 1 };
        case actions.ASYNC_INCREASE_ERROR:
            return { ...state, loading: false };
    }

    return state;
};
