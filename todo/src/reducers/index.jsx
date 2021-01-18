import { ADD_ACTION, ID_ACTION, COMPLETE_ACTION, TOGGLE_ACTION, CLEAR_ACTION } from '../actions/index';

export const initialState = {
    item: "Learn about reducers",
    complete: false,
    id: Math.floor(Math.random() * Date.now()), 
    toggle: false,
    clear: '',
}


const reducer = (state, action) => {
    switch(action.type){
        case (ADD_ACTION):
            return ({...state, item: action.payload})
        case(ID_ACTION):
            return({...state, id: action.payload})
        case(COMPLETE_ACTION):
            return({...state, complete: action.payload})
        case(TOGGLE_ACTION):
            return({...state, toggle: action.payload})
        case(CLEAR_ACTION):
            return({...state, clear: 0})
    default:
        return (state);
    }
}
export default reducer;