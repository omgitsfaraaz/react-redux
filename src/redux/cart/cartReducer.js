import { BUY_POTATO } from '../potato/potatoTypes';
import { BUY_TOMATO } from '../tomato/tomatoTypes';

const intialState = {
    cart: 0
}

const cartReducer = (state = intialState, action) => {
    switch(action.type) {
        case BUY_POTATO:
            return {
                ...state,
                cart: state.cart + 1
            }
        case BUY_TOMATO:
            return {
                ...state,
                cart: state.cart + 1
            }
        default: return state
    }
}

export default cartReducer;