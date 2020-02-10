import { combineReducers } from 'redux';
import appReducer from './containers/AppContainer/appReducer';
import cloth from './containers/ClothContainer/clothReducer';

export default combineReducers({
  appReducer,
  cloth,
});
