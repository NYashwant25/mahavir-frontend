import axios from 'axios';
import {API_URL} from './../config'
export const GET_OCCASION_DATA = 'GET_OCCASION_DATA';



export const OccasionData = (payload) => dispatch => {
    axios.get(`${API_URL}/occasion/filter/${payload}`)
    .then(res=>{
        dispatch({
            type:GET_OCCASION_DATA,
            payload:res.data
        })
    })
}