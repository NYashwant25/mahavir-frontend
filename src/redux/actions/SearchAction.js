import axios from 'axios';
import {API_URL} from './../config'
export const DROPDOWN_SEARCH_SUCCESS = 'DROPDOWN_SEARCH_SUCCESS';
export const DROPDOWN_SEARCH_ERROR = 'DROPDOWN_SEARCH_ERROR';
export const REQUEST = 'REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';



export const dropdownSearch = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/by-user-search-limit`, payload)
    .then(res=>{
        dispatch({
            type:DROPDOWN_SEARCH_SUCCESS,
            payload:res.data.listData
        })
    })
}


export const search = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.get(`${API_URL}/product-list/by-user-search/${payload}`)
    .then(res=>{
        dispatch({
            type:SEARCH_SUCCESS,
            payload:res.data.data
        })
    })
}