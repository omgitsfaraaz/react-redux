import { BUY_TOMATO } from "./tomatoTypes"

const initialState = {
    cart: 0,
    numOfTomato: 10
}

const tomatoReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_TOMATO:
            return {
                ...state,
                cart: state.cart + 1,
                numOfTomato: state.numOfTomato - 1
            }
        default: return state
    }
}

export default tomatoReducer;