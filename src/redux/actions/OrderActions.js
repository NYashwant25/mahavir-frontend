import axios from 'axios';
import {API_URL} from './../config'

export const REQUEST = 'REQUEST';
export const ORDER_PLACE = 'ORDER_PLACE';
export const ORDER_PLACE_SUCCESS = 'ORDER_PLACE_SUCCESS';
export const ORDER_PLACE_API_ERROR = 'ORDER_PLACE_API_ERROR';
export const ORDER_PLACE_ERROR = 'ORDER_PLACE_ERROR';
export const RESET_ORDER_PLACE_STATE = 'RESET_ORDER_PLACE_STATE'

export const OrderDataPost = (payload) => dispatch =>{
    
    dispatch({type:REQUEST})
    axios.post(`http://localhost:4000/api/order/place`,payload)
    .then(res=>{
        if(res.data.success== true){
            dispatch({
                type:ORDER_PLACE_SUCCESS,
                payload:res.data
            })
        }
        if(res.data.loginStatus=='passwordnotmatch'){
            dispatch({
                type:ORDER_PLACE_ERROR,
                payload:res.data
            })
        }
        
    })   
    .catch(error=>{
        console.log(error)
        dispatch({
            type:ORDER_PLACE_API_ERROR,
            payload:error
        })
    })
}

export const resetOrderState = () => dispatch =>{
    dispatch({type:RESET_ORDER_PLACE_STATE}) 
}