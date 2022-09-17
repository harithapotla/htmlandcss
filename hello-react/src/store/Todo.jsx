import React,{useState} from "react";
import { connect } from "react-redux";

function Todo({dispatch,to:{todo}}){
    var [newtodo,setnewtodo]=React.useState('')
    function add(){
        dispatch({type:'ADDTODO',payload:newtodo})
    }
    return(
        <div className="betterview">
        <h1>TODOLIST</h1>
        <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
        <button onClick={add}>Add todo</button>
        <ul>
        {
            todo.map((t,i)=>{
                return (<li>{t}</li>)
            })
        }
        </ul>
        </div>
    )
}
export default connect((store)=>store)(Todo);