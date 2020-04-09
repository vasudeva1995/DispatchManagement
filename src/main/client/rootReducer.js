import { combineReducers } from 'redux';
import LotReducer from './containers/Lots/LotReducer';
import cloth from './containers/ClothContainer/clothReducer';
import retailer from './containers/RetailerContainer/retailerReducer';
import RetailerBills from './containers/RetailerBills/RetailerBillReducer';

export default combineReducers({
  cloth,
  LotReducer,
  retailer,
  RetailerBills,
});
