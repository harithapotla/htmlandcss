import React from "react";
import {connect} from 'react-redux';

function Counter(props){
    function inc(){
        props.dispatch({type:'INC'})
    }
    function dec(){
        props.dispatch({type:'DEC'})
    }
    function reset(){
        props.dispatch({type:'RESET'})
    }
    return (<div className="betterview">
    <h1>Counter:{props.c.count}</h1>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>decrement</button>
    <button onClick={reset}>RESET</button>
    </div>)
}

export default connect((store)=>{return store})(Counter);