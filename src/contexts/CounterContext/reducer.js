import { initialState } from ".";
import * as actions from "./actions";

export const counterReducer = (state, action) => {
    switch (action.type) {
        case actions.INCREASE:
            return { ...state, counter: state.counter + 1, error: false };
        case actions.DECREASE:
            return { ...state, counter: state.counter - 1, error: false };
        case actions.RESET:
            return { ...initialState };
        case actions.SET_COUNTER:
            return { ...state, ...action.payload, error: false };
        case actions.ASYNC_INCREASE_START:
            return { ...state, loading: true, error: false };
        case actions.ASYNC_INCREASE_END:
            return { ...state, loading: false, counter: state.counter + 1, error: false };
        case actions.ASYNC_INCREASE_ERROR:
            return { ...state, loading: false, error: true };
    }

    return state;
};
