import {ADD_CART, CART_ID, CART_COUNT} from './../actions/CartAction';

const initialState = {
    CartData: [],
    CartId : [],
    CartCount:0
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            return{
                ...state,
                CartData:action.payload
            }
            break;

        case CART_COUNT:
        return {
            ...state,
            CartCount:action.payload
        }
        break;

        case CART_ID:
        return{
            ...state,
            CartId:action.payload
        }
    
        default:
        return {
            ...state
        }
            break;
    }
}


export default CartReducer;