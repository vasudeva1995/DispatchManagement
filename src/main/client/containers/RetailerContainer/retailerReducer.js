import * as actions from './retailerAction';

const initialState = {
  retailerTable: [],
};

const retailer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_RETAILER_DATA:
      return { ...state, retailerTable: action.payload };
    default:
      return state;
  }
};

export default retailer;
