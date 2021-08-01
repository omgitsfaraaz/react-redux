import { combineReducers } from "redux";
import tomatoReducer from "./tomato/tomatoReducer";
import potatoReducer from "./potato/potatoReducer";

const rootReducer = combineReducers({
    tomato: tomatoReducer,
    potato: potatoReducer
})

export default rootReducer;