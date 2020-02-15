import LotService from './LotService';

export function toggleDrawer(isDrawerOpen) {
  return (dispatch) => {
    dispatch({ type: 'SET_IS_DRAWER_OPEN', payload: isDrawerOpen });
  };
}

export function getLotData() {
  return async (dispatch) => {
    let columns = LotService.getTableColumns();
    const lots = await LotService.getPaginationWiseLots();
    console.log(lots);
    dispatch({type:'SET_INITIAL_LOT_DATA',payload:{columns,lots}})
  };
}
