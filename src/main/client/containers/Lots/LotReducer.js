import initialState from './LotsInitialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_DRAWER_OPEN':
      return state.set('isDrawerOpen', action.payload);
    case 'SET_INITIAL_LOT_DATA':
      return state
        .set('columns', action.payload.columns)
        .set('lots', action.payload.lots)
        .set('lotsMap', action.payload.lotsMap)
        .set('paginationConfig', action.payload.paginationConfig)
        .set('dataStores', action.payload.dataStores)
        .set('isDrawerOpen', false);
    case 'SET_LOT_DATA':
      return state
        .set('lots', action.payload.lots)
        .set('lotsMap', action.payload.lotsMap)
        .set('paginationConfig', action.payload.paginationConfig)
        .set('isDrawerOpen', false);
    default:
      return state;
  }
};
