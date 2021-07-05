import 
{SEARCH_SUCCESS, SEARCH_ERROR, 
DROPDOWN_SEARCH_ERROR, 
DROPDOWN_SEARCH_SUCCESS, REQUEST} 
from './../actions/SearchAction';

const initialState = {
    dropdownSearch:[],
    loader:false,
    search:[]
}

const SearchReducer = (state=initialState, action) => {
    switch (action.type) {
        case REQUEST:
        return{
            ...state,
            loader:true,
        }            
        break;

        case  DROPDOWN_SEARCH_SUCCESS:
        return{
            ...state,
            loader:false,
            dropdownSearch:action.payload
        }
        break

        case SEARCH_SUCCESS:
        return{
            ...state,
            loader:false,
            search:action.payload
        }
        break;
    
        default:
        return{
            ...state
        }
            break;
    }
}

export default SearchReducer