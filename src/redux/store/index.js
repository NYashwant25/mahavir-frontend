import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from './../reducers'
const initialState = {}
const middlewares = [thunk];
export const store = createStore(
    RootReducer, compose(
    applyMiddleware(...middlewares)
  )
);