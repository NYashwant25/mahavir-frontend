import axios from 'axios';
import {API_URL} from '../config'
export const REQUEST = 'REQUEST';
export const GET_GOLD_PRICE = 'GET_GOLD_PRICE';

export const  getPrice  = () => async dispatch  => {
    dispatch({type:REQUEST})
    await axios.get(`http://localhost:4000/api/price/list`)
    .then(res=>{
        dispatch({
            type:GET_GOLD_PRICE,
            payload:res.data
        })
    })
    .catch(error=>{
        console.log('error')
        console.log(error);
    })
}
