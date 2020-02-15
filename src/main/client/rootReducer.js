import { combineReducers } from 'redux';
import appReducer from './containers/AppContainer/appReducer';
import LotReducer from './containers/Lots/LotReducer';
import cloth from './containers/ClothContainer/clothReducer';

export default combineReducers({
  appReducer,
  LotReducer,
  cloth,
});
