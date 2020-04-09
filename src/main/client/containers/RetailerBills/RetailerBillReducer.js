import initialState from './RetailerBillInitialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_DRAWER_OPEN':
      return state.set('isDrawerOpen', action.payload);
    case 'SET_INITIAL_BILL_DATA':
      return state
        .set('columns', action.payload.columns)
        .set('bills', action.payload.bills)
        .set('billsMap', action.payload.billsMap)
        .set('paginationConfig', action.payload.paginationConfig)
        .set('dataStores', action.payload.dataStores)
        .set('isDrawerOpen', false);
    case 'SET_BILL_DATA':
      return state
        .set('bills', action.payload.bills)
        .set('billsMap', action.payload.billsMap)
        .set('paginationConfig', action.payload.paginationConfig)
        .set('isDrawerOpen', false);
    default:
      return state;
  }
};
