import { combineReducers } from "redux";
import tomatoReducer from "./tomato/tomatoReducer";
import potatoReducer from "./potato/potatoReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    tomato: tomatoReducer,
    potato: potatoReducer,
    cart: cartReducer
})

export default rootReducer;