import axios from 'axios';
import {API_URL} from './../config'
export const SUBMIT_TRY_AT_HOME = 'SUBMIT_TRY_AT_HOME';
export const REQUEST = 'REQUEST';
export const STATUS_OFF = 'STATUS_OFF';


export const SubmitTryAtHome = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/try-at-home`, payload)
    .then(res=>{
        dispatch({
            type:SUBMIT_TRY_AT_HOME,
            payload:res.data
        })

    })
    .catch(error=>{
        console.log(error);
    })
}

export const StatusOff = () =>  dispatch => {
    dispatch({type:STATUS_OFF})
}