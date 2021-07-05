import {GET_OCCASION_DATA} from './../actions/OccasionAction';

const initialState = {
    OccasionProduct:[]
}

const OccasionReducer = (state=initialState, action) => {
        switch (action.type) {
            case GET_OCCASION_DATA:
            return {
                ...state,
                OccasionProduct:action.payload
            }
                
            default:
               return {
                    ...state
                };
        }
}

export default OccasionReducer