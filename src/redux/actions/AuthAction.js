import axios from 'axios';
import {API_URL} from './../config'
export const SIGN_IN_WITH_GOOGLE = 'SIGN_IN_WITH_GOOGLE';
export const SIGN_IN_WITH_FACEBOOK = 'SIGN_IN_WITH_FACEBOOK';
export const SIGN_UP_FORM_ERROR = 'SIGN_UP_FORM_ERROR';
export const SIGN_UP_FORM_EXIST = 'SIGN_UP_FORM_EXIST';
export const SIGN_UP_FORM_SUCCESS = 'SIGN_UP_FORM_SUCCESS';
export const SIGN_IN_FORM_ERROR = 'SIGN_IN_FORM_ERROR';
export const SIGN_IN_FORM_SUCCESS = 'SIGN_IN_FORM_SUCCESS';
export const SIGN_IN_USER_NOT_FOUND = 'SIGN_IN_USER_NOT_FOUND';
export const SIGN_IN_PASSWORD_NOT_MATCHED = 'SIGN_IN_PASSWORD_NOT_MATCHED';
export const REQUEST = 'REQUEST';
export const INVALID_OTP = 'INVALID_OTP';
export const VERIFIED_EMAIL = 'VERIFIED_EMAIL';
export const STATUS_OFF = 'STATUS_OFF';
export const LOGIN_VERIFIED = 'LOGIN_VERIFIED';
export const EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED';
export const INVALID_TOKEN = 'INVALID_TOKEN';
export const GET_OTP = 'GET_OTP';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const NOT_GET_OTP = 'NOT_GET_OTP';
export const INVALID_EMAIL = 'INVALID_EMAIL';
export const PROFILE_UPDATED = 'PROFILE_UPDATE';
export const INVALID_EMAIL_FOR_PROFILE_UPDATE = 'INVALID_EMAIL_FOR_PROFILE_UPDATE';

export const SigninWidthGoogle = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/auth/google/signin`,payload)
    .then(res=>{
        console.log(res.data)
        localStorage.setItem('userData', res)
        dispatch({
            type:SIGN_IN_WITH_GOOGLE,
            payload:res.data
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

export const SigninWidthFacebook = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/auth/facebook/signin`,payload)
    .then(res=>{
    console.log('vishal')
    console.log(res)
        dispatch({
            type:SIGN_IN_WITH_FACEBOOK,
            payload:res.data
        })
    })
    .catch(error=>{
        alert('error')
        console.log(error)
    })
}

export const SigninWidthForm = (payload) => dispatch =>{
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/auth/form/signin`,payload)
    .then(res=>{
        console.log('ilksldf')
        console.log(res.data)
        
        if(res.data.loginStatus=='success'){
            dispatch({
                type:SIGN_IN_FORM_SUCCESS,
                payload:res.data
            })
        }
        else if(res.data.loginStatus=='passwordnotmatch'){
            dispatch({
                type:SIGN_IN_PASSWORD_NOT_MATCHED,
                payload:res.data
            })
        }
        else if(res.data.loginStatus=='notfound'){
            dispatch({
                type:SIGN_IN_USER_NOT_FOUND,
                payload:res.data
            })
        }
        else if(res.data.loginStatus=='emailnotverified'){
            dispatch({
                type:EMAIL_NOT_VERIFIED,
                payload:res.data
            })
        }
        else{
            dispatch({
            type:SIGN_UP_FORM_ERROR,
            payload:res.data
            })
        }
    })   
    .catch(error=>{
        console.log(error)
        dispatch({
            type:SIGN_IN_FORM_ERROR,
            payload:error
        })
    })
}

export const SignupForm = (payload) => dispatch =>{
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/auth/form/signup`,payload)
    .then(res=>{
        if(res.data.loginStatus=='success'){
            dispatch({
                type:SIGN_UP_FORM_SUCCESS,
                payload:res.data
            })
        }
        else if(res.data.loginStatus=='exist'){
            dispatch({
                type:SIGN_UP_FORM_EXIST,
                payload:res.data
            })
        }
        else{
            dispatch({
            type:SIGN_UP_FORM_ERROR,
            payload:res.data
            })
        }
    })   
    .catch(error=>{
        console.log(error)
        dispatch({
            type:SIGN_UP_FORM_ERROR,
            payload:error
        })
    })
}

export const VerifyEmailOTP = (payload) => dispatch =>{
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/auth/form/verify-email`,payload)
    .then(res=>{
        console.log(res)
        if(res.data.VerifyStatus=='verified'){
            dispatch({
                type:VERIFIED_EMAIL,
                payload:res.data
            })
        }
        else if(res.data.VerifyStatus=='invalid'){
            dispatch({
                type:INVALID_OTP,
                payload:res.data
            })
        }
        else{
            dispatch({
            type:SIGN_UP_FORM_ERROR,
            payload:res.data
            })
        }
    })   
    .catch(error=>{
        dispatch({
            type:SIGN_UP_FORM_ERROR,
            payload:error
        })
    })
}

export const CheckLogin = () => dispatch =>{
    dispatch({type:REQUEST})   
    axios.get(`${API_URL}/auth/user/permission`,{
    headers: {
        'x-access-token': localStorage.getItem('token')
    }
  })
    .then(res=>{
        
        if(res.data.login==true){
            dispatch({
                type:LOGIN_VERIFIED,
                payload:res.data.data
            })
        }
        else if(res.data.login==false){
            dispatch({
                type:INVALID_TOKEN
            })
        }
        else{
            dispatch({
            type:SIGN_UP_FORM_ERROR
            })
        }
    })   
    .catch(error=>{
        dispatch({
            type:SIGN_UP_FORM_ERROR,
            payload:error
        })
    })   
}

export const ForgotPasswordAction = (payload) => dispatch => {
    dispatch({type:REQUEST})   
    axios.post(`${API_URL}/auth/form/forgot-password`, payload)
    .then(res=>{
        if(res.data.user=='found'){
        dispatch({
            type:GET_OTP,
        })
        }
        else{
        dispatch({
            type:NOT_GET_OTP
        })
        }
    })   
    .catch(error=>{
        dispatch({
            type:SIGN_UP_FORM_ERROR,
            payload:error
        })
    })   
}

export const ResetPasswordAction = (payload) => dispatch =>{
     dispatch({type:REQUEST})   
    axios.post(`${API_URL}/auth/user/reset-password`,payload)
    .then(res=>{
        console.log(res)
        if(res.data.status=='success'){
        dispatch({
            type:RESET_PASSWORD,
        })
        }
        else{
        dispatch({
            type:INVALID_OTP
        })
        }
    })   
    .catch(error=>{
        dispatch({
            type:SIGN_UP_FORM_ERROR,
            payload:error
        })
    })  
}

export const ProfileUpdateAction = (payload) => dispatch =>{
   dispatch({type:REQUEST})   
   axios.post(`${API_URL}/auth/user/submit-details`,payload)
   .then(res=>{
       console.log(res)
       if(res.data.status=='success'){
       dispatch({
           type:PROFILE_UPDATED,
           payload:res.data.data
       })
       }
       else{
       dispatch({
           type:INVALID_EMAIL_FOR_PROFILE_UPDATE
       })
       }
   })   
   .catch(error=>{
       dispatch({
           type:SIGN_UP_FORM_ERROR,
           payload:error
       })
   })  
}

export const StatusOff = () =>  dispatch => {
    dispatch({type:STATUS_OFF})
}