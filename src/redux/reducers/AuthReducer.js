import {SIGN_IN_WITH_GOOGLE, SIGN_IN_WITH_FACEBOOK, SIGN_UP_FORM_ERROR, 
        SIGN_UP_FORM_SUCCESS, SIGN_IN_FORM_ERROR, SIGN_IN_FORM_SUCCESS,
        SIGN_IN_USER_NOT_FOUND, SIGN_IN_PASSWORD_NOT_MATCHED, REQUEST, 
        SIGN_UP_FORM_EXIST, INVALID_OTP, VERIFIED_EMAIL, INVALID_TOKEN, 
        LOGIN_VERIFIED, EMAIL_NOT_VERIFIED, GET_OTP, RESET_PASSWORD, STATUS_OFF,
        NOT_GET_OTP, INVALID_EMAIL, PROFILE_UPDATED, INVALID_EMAIL_FOR_PROFILE_UPDATE}
from './../actions/AuthAction';

const initialState = {
    login:false,
    authData:{},
    registerStatus:'',
    loginStatus:'waiting',
    loader:false,
    token:'',
    VerifyStatus:'waiting',
    resetPassword:'waiting',
    get_otp:'waiting',
    flashStatus:''
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case REQUEST:
        return {
            ...state,
            loader:true,
        }
        break;

        case SIGN_IN_WITH_GOOGLE:
        return{
            ...state,
            loader:false,
            login:true,
            loginStatus:'success',
            token:action.payload.token,
            registerStatus:'success'
        }
        break;

        case SIGN_IN_WITH_FACEBOOK:

        return{
            ...state,
            loader:false,
            login:true,
            loginStatus:'success',
            token:action.payload.token,
            registerStatus:'success'
        }
        break;

        case SIGN_IN_FORM_SUCCESS:
        return{
            ...state,
            loader:false,
            login:true,
            loginStatus:'success',
            token:action.payload.token,
            flashStatus:'success'
        }
            break;

        case SIGN_UP_FORM_SUCCESS:
        return{
            ...state,
            loader:false,
            login:true,
            registerStatus:'success'
        }
            break;

        case SIGN_IN_PASSWORD_NOT_MATCHED:
        return{
            ...state,
            loader:false,
            loginStatus:'passwordnotmatch'
        }
        break;

        case SIGN_IN_USER_NOT_FOUND:
        return{
            ...state,
            loader:false,
            loginStatus:'notfound'
        }
            break;

        case SIGN_UP_FORM_EXIST:
        return{
            ...state,
            loader:false,
            registerStatus:'exist'
        }
        break;
        case INVALID_OTP:
        return{
            ...state,
            loader:false,
            VerifyStatus:'invalid'
        }
        break;

        case VERIFIED_EMAIL:
        return{
            ...state,
            loader:false,
            VerifyStatus:"verified",
        }
        break;

        case LOGIN_VERIFIED:
        return{
            loader:false,
            login:true,
            authData:action.payload,
            loginStatus:'success'
        }
        break;

        case INVALID_TOKEN:
        return {
            loader:false,
            login:false,
            loginStatus:'invalid'
        }
        break;

        case EMAIL_NOT_VERIFIED:
        return {
            loader:false,
            login:false,
            loginStatus:'notverified'
        }
        break;

        case GET_OTP:
        return{
            loader:false,
            get_otp:'true'
        }
        break;

        case NOT_GET_OTP:
        return{
            loader:false,
            get_otp:'false'
        }
        break;

        case STATUS_OFF:
            return{
                ...state,
                loader:false,
                flashStatus:''
            }
        break;

        case PROFILE_UPDATED:
            return{
            authData:action.payload
        }

        default:
        return{
            ...state,
            loader:false
        }
            break;
    }
}

export default AuthReducer