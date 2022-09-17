
const initialState={
    todo:['icecream','biryani','coke']
}

function todoReducer(state=initialState,action){
   if(action.type==='ADDTODO'){
    return {...state,todo:[...state.todo,action.payload]}
   }
    return state

}

export default todoReducer;