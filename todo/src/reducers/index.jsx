import { ADD_TODO } from '../actions/index';

export const initialState ={
    todos: [{
        title: 'todo 1',
        id: 0,
        completed: false,
      }, 
      {
        title: 'todo 2',
        id: 1,
        completed: true,
      }, 
      {
        title: 'todo 3',
        id: 2,
        completed: false,
      }]
    }

const reducer = (state, action) => {
    switch(action.type){
        case(ADD_TODO):
        const newTodo = {
            id: state.todos.length,
            completed: false,
            title: action.payload
        }
        return({
            ...state, todos:[...state.todos, newTodo]
        })
        case("TOGGLE_COMPLETED"):
        //map through each todo
        //if tod has id we're looking for (in the action.payload), return a copy of the item with completed flipped
        //if todo does not have the id we are looking for, return the item as is
            return({...state, todos: state.todos.map(todo=>{
                if(todo.id === action.payload){
                    return({...todo, completed: !todo.completed})
                } else {
                    return (todo);
                }
            })})
        case("CLEAR_COMPLETED"):
        return{
            ...state, 
            todos: state.todos.filter(todo => {
                return(!todo.completed)
            })
        }
    default:
        return (state);
    }
}
export default reducer;