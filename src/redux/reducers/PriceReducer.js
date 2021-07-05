import { REQUEST, GET_GOLD_PRICE,  } 
    from './../actions/priceListAction';

const initialState = {
    priceList:[]
}

const PriceReducer = (state=initialState, action) => {    
    switch (action.type) {
        case REQUEST:
        return{
            ...state,
            loading:true
        }
        break;
      
        case GET_GOLD_PRICE:
            return{
            ...state,
            loading:false,
            priceList:action.payload.pricelist
            }
        break;

        default:
        return {
            ...state
        };
    }
}

export default PriceReducer