import * as actions from "./actions";

export const buildActions = (dispatch) => {
    return {
        increase: () => dispatch({ type: actions.INCREASE }),
    };
};
