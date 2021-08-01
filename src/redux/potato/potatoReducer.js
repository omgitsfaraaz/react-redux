import { BUY_POTATO } from "./potatoTypes"

const initialState = {
    cart: 0,
    numOfPotatoes: 20
}

const potatoReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_POTATO:
            return {
                ...state,
                cart: state.cart + 1,
                numOfPotatoes: state.numOfPotatoes - 1
            }
        default: return state
    }
}

export default potatoReducer;