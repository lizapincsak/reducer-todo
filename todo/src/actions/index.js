export const ADD_ACTION = "ADD_ACTION";
export const ID_ACTION = "ID_ACTION";
export const COMPLETE_ACTION = "COMPLETE_ACTION";
export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const CLEAR_ACTION = "CLEAR_ACTION";

export const addAction = (addItem) => {
    return({type: ADD_ACTION, payload: addItem})
}

export const idAction = (addId) => {
    return({type: ID_ACTION, payload: addId})
}

export const completeAction = (willComplete) => {
    return({type: COMPLETE_ACTION, payload: willComplete})
}

export const toggleAction = (willToggle) => {
    return({type: TOGGLE_ACTION, payload: willToggle})
}

export const clearAction = (willClear) => {
    return({type: CLEAR_ACTION, payload: willClear})
}