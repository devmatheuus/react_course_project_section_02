import * as actions from "./actions";

export const buildActions = (dispatch) => {
    return {
        increase: () => dispatch({ type: actions.INCREASE }),
        decrease: () => dispatch({ type: actions.DECREASE }),
        reset: () => dispatch({ type: actions.RESET }),
        setCounter: (payload) => dispatch({ type: actions.SET_COUNTER, payload }),
        asyncIncrease: () => asyncIncreaseFn(dispatch),
        asyncError: () => asyncErrorFn(dispatch),
    };
};

const asyncIncreaseFn = async (dispatch) => {
    dispatch({ type: actions.ASYNC_INCREASE_START });

    return await new Promise((resolve) => {
        setTimeout(() => {
            dispatch({ type: actions.ASYNC_INCREASE_END });

            resolve("RESOLVED!");
        }, 2000);
    });
};

const asyncErrorFn = async (dispatch) => {
    dispatch({ type: actions.ASYNC_INCREASE_START });

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch({ type: actions.ASYNC_INCREASE_ERROR });
            reject(new Error("ERROR!"));
        }, 2000);
    });
};
