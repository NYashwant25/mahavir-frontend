import axios from 'axios';
import {API_URL} from './../config'
export const GET_PRODUCT_LIST_DATA = 'GET_PRODUCT_LIST_DATA';
export const ALL_CATEGORY_PRODUCT = 'ALL_CATEGORY_PRODUCT';
export const GIFT_FOR_SPECIAL_ONES = 'GIFT_FOR_SPECIAL_ONES';
export const COLLECTION_PRODUCT = 'COLLECTION_PRODUCT';
export const PURITY_PRODUCT = 'PURITY_PRODUCT';
export const METAL_PRODUCT = 'METAL_PRODUCT';
export const OCCASION_PRODUCT = 'OCCASION_PRODUCT';
export const PRICE_RANGE = 'PRICE_RANGE';
export const REQUEST = 'REQUEST';
export const GET_COLLECTION = 'GET_COLLECTION';

export const ProductListData = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list`, payload)
    .then(res=>{
        dispatch({
            type:GET_PRODUCT_LIST_DATA,
            payload:res.data.listData
        })

    })
    .catch(error=>{
        console.log(error);
    })
}


export const AllCategoryProductAction = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/all-jewellery`, payload)
    .then(res=>{
        
        dispatch({
            type:ALL_CATEGORY_PRODUCT,
            payload:res.data.listData
        })
    })
    .catch(error=>{
        alert('errr')
        console.log(error);
    })
}



export const GiftForSpecialOnes = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/by-special-ones`, payload)
    .then(res=>{
        
        dispatch({
            type:GIFT_FOR_SPECIAL_ONES,
            payload:res.data.listData
        })
    })
    .catch(error=>{
        alert('errr')
        console.log(error);
    })
}



export const CollectionProduct = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/by-collection`, payload)
    .then(res=>{
        dispatch({
            type:COLLECTION_PRODUCT,
            payload:res.data.listData
        })
    })
    .catch(error=>{
        console.log('errr')
        console.log(error);
    })
}



export const PurityProduct = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/by-purity`, payload)
    .then(res=>{
        
        dispatch({
            type:PURITY_PRODUCT,
            payload:res.data.listData
        })
    })
    .catch(error=>{
        alert('errr')
        console.log(error);
    })
}



export const MetalProduct = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/by-metal`, payload)
    .then(res=>{
        
        dispatch({
            type:METAL_PRODUCT,
            payload:res.data.listData
        })
    })
    .catch(error=>{
        alert('errr')
        console.log(error);
    })
}



export const OccasionProduct = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/by-occasion`, payload)
    .then(res=>{
        
        dispatch({
            type:OCCASION_PRODUCT,
            payload:res.data
        })
    })
    .catch(error=>{
        console.log('errkunalr')
        console.log(error);
    })
}


export const PuritySearch = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/by-purity`, payload)
    .then(res=>{
        dispatch({
            type:PURITY_PRODUCT,
            payload:res.data
        })
    })
    .catch(error=>{
        console.log('errkunalr')
        console.log(error);
    })
}

export const searchPriceRange = (payload) => dispatch => {
    dispatch({type:REQUEST})
    axios.post(`${API_URL}/product-list/by-price-range`, payload)
    .then(res=>{
        dispatch({
            type:PRICE_RANGE,
            payload:res.data
        })
    })
    .catch(error=>{
        console.log('errkunalr')
        console.log(error);
    })
}


export const getCollection = () => dispatch => {
    dispatch({type:REQUEST})
    axios.get(`${API_URL}/product-list/get-collection`)
    .then(res=>{
        console.log(res)
        dispatch({
            type:GET_COLLECTION,
            payload:res.data
        })
    })
    .catch(error=>{
        console.log('errkunalr')
        console.log(error);
    })
}
