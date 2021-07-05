import {
    REQUEST,
    ORDER_PLACE,
    ORDER_PLACE_SUCCESS, 
    ORDER_PLACE_API_ERROR,
    ORDER_PLACE_ERROR,
    RESET_ORDER_PLACE_STATE,
}
from './../actions/OrderActions';

const initialState = {
loading:false,
error:false,
success:false,
message:null,

};

const OrderReducer = (state = initialState, action) => {
switch (action.type) {
    
    case REQUEST:
    return {
        ...state,
        loading:true,
    }
    break;

    case ORDER_PLACE:
    return{
        ...state,
        loading:false,
        error:false,
        success:true,
        message:"Order placed",
    }
    break;
    case ORDER_PLACE_SUCCESS:
        
    return{
        ...state,
        loading:false,
        error:false,
        success:true,
        message:"Order placed",
    }
    break;
    case ORDER_PLACE_ERROR:
    return{
        ...state,
        loading:false,
        error:true,
        success:false,
        message:"Oops! please try again",
    }
    break;
    case ORDER_PLACE_API_ERROR:
    return{
        ...state,
        loading:false,
        error:true,
        success:false,
        message:"Oops! please try again",
    }
    break;

    case RESET_ORDER_PLACE_STATE:
    return{
        ...state,
        loading:false,
        error:false,
        success:false,
        message:false,
    }
    break;
    
    default:
    return{
        ...state,
        loader:false
    }
        break;
}
}

export default OrderReducer