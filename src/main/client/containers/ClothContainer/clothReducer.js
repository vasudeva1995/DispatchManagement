import * as actions from './clothAction';

const initialState = {
  clothTable: [],
};

const cloth = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CLOTH_DATA:
      return { ...state, clothTable: action.payload };
    case actions.ADD_CLOTH_DATA:
      return { ...state, clothTable: [...state.clothTable, action.payload] };
    default:
      return state;
  }
};

export default cloth;
