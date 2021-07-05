import {GET_HOME_PAGE_DATA} from './../actions/HomeAction';

const initialState = {
    HomeData:[]
}

const HomeReducer = (state=initialState, action) => {
        switch (action.type) {
            case GET_HOME_PAGE_DATA:
            return {
                ...state,
                HomeData:action.payload
            }
                
            default:
               return {
                    ...state
                };
        }
}

export default HomeReducer