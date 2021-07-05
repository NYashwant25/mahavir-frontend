import {SUBMIT_TRY_AT_HOME, REQUEST} from './../actions/TryAtHomeAction';

const initialState = {
    status:"",
    loader:false
}

const TryAtHomeReducer = (state=initialState, action) => {
    switch (action.type) {
        case REQUEST:
        return{
            ...state,
            loader:true
        }            
        break;

        case SUBMIT_TRY_AT_HOME :
        return{
            ...state,
            loader:false,
            status:'success'
        }
    
        default:
        return{
            ...state,
            status:''
        }
            break;
    }
}

export default TryAtHomeReducer