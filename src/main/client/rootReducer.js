import { combineReducers } from 'redux';
import LotReducer from './containers/Lots/LotReducer';
import cloth from './containers/ClothContainer/clothReducer';

export default combineReducers({
  cloth,
  LotReducer
});
