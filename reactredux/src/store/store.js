import counterReducer from "./counterReducer";
import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";
var reducer = combineReducers({counter:counterReducer,todo:todoReducer})

var store = new createStore(reducer)
export default store;
