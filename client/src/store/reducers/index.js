import { combineReducers } from "redux";
import events from "./eventReducer";
import todos from "./todoReducer";

const appReducer = combineReducers({ events, todos });

export default appReducer;
