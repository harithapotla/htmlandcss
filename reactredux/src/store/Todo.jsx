import React,{useState} from "react";
import { connect } from "react-redux";
//by using destructure we avoid props also
function TodoList({dispatch,todo:{todo}}){
    var [newtodo,setnewtodo]=React.useState('')

    function add(){
        dispatch({type:'ADDTODO',payload:newtodo})
    }
    
    return(<div className="betterview">
    <h1>Todos</h1>
    <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
    <button onClick={add}>Add todo</button>
    <ul>
    {
        todo.map((t,i)=>{
            return(<li key={i}>{t}</li>)
        })
    }
        </ul>
    </div>)
}

export default connect((store)=>{return store})(TodoList)