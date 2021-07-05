import React from 'react';
import HomeReducer from './HomeReducer';
import CartReducer from './CartReducer';
import OccasionReducer from './OccasionReducer';
import AuthReducer from './AuthReducer'
import ProductListReducer from './ProductListReducer'
import TryAtHomeReducer from './TryAtHomeReducer'
import SearchReducer from './SearchReducer';
import GoldPriceReducer from './PriceReducer';
import OrderReducer from './OrderReducer';

import { combineReducers } from "redux";

const RootReducer = combineReducers({
    home:HomeReducer,
    occasion:OccasionReducer,
    auth:AuthReducer,
    cart:CartReducer,
    productlist:ProductListReducer,
    tryathome:TryAtHomeReducer,
    userSearch:SearchReducer,
    pricelist:GoldPriceReducer,
    orderplaced:OrderReducer
})

export default RootReducer;