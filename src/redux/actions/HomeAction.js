import axios from 'axios';
import {API_URL} from './../config'
export const GET_HOME_PAGE_DATA = 'GET_HOME_PAGE_DATA';



export const HomePageData = () => dispatch => {
    axios.get(`${API_URL}/home-page`)
    .then(res=>{
        
        dispatch({
            type:GET_HOME_PAGE_DATA,
            payload:res.data
        })
    })
}