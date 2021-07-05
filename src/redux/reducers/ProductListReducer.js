import {GET_PRODUCT_LIST_DATA, REQUEST, ALL_CATEGORY_PRODUCT, GIFT_FOR_SPECIAL_ONES,
        METAL_PRODUCT, COLLECTION_PRODUCT, OCCASION_PRODUCT, PURITY_PRODUCT, PRICE_RANGE, GET_COLLECTION,  } 
        from './../actions/ProductListAction';

const initialState = {
    productIn:[],
    loading:true,
    allCategory:[],
    purity:[],
    occasion:[],
    collection:[],
    metal:[],
    giftforones:[],
    price_range:[],
    menu:[],
    collection_banner:[]
}

const ProductListReducer = (state=initialState, action) => {    
        switch (action.type) {
            case REQUEST:
            return{
                ...state,
                loading:true
            }
            break;
            case GET_PRODUCT_LIST_DATA:
            return {
                ...state,
                productIn:action.payload,
                loading:false,
            }
            break;

            case ALL_CATEGORY_PRODUCT:
            return {
                ...state,
                allCategory:action.payload,
                loading:false,
            }
            break;

            case METAL_PRODUCT:
            return {
                ...state,
                metal:action.payload,
                loading:false,
            }
            break;

            case OCCASION_PRODUCT:
            return {
                ...state,
                occasion:action.payload.listData,
                menu:action.payload.menu,
                loading:false,
            }
            break;

            case COLLECTION_PRODUCT:
            return {
                ...state,
                collection:action.payload,
                loading:false,
            }
            break;

            case PURITY_PRODUCT:
            return {
                ...state,
                purity:action.payload.listData,
                loading:false,
            }
            break;

            case GIFT_FOR_SPECIAL_ONES:
            return {
                ...state,
                giftforones:action.payload,
                loading:false,
            }
            break;

            case PRICE_RANGE:
                return {
                ...state,
                loading:false,
                price_range:action.payload.listData
                }
            break;

            case GET_COLLECTION:
                return{
                ...state,
                loading:false,
                collection_banner:action.payload.listData
                }
            break;

            default:
            return {
                ...state
            };
        }
}

export default ProductListReducer