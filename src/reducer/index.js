import { combineReducers } from 'redux'
import reducerReqWaiting from './BuyerReqWaiting'
import NotifReducer from './NotifReducer'
import BuyerReducer from './BuyerReducer'
import SellerReducer from './SellerReducer'


export default combineReducers({reducerReqWaiting, NotifReducer, BuyerReducer, SellerReducer}) 