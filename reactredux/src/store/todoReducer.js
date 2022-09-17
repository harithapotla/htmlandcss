
const initialState={
    todo:['icecream','snacks','sweets']
}

function todoReducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {...state,todo:[...state.todo,action.payload]}
    }

    return state
}

export default todoReducer;