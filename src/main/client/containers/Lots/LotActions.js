import LotService from './LotService';
import { message } from 'antd';
import 'antd/es/message/style/css';

export function toggleDrawer(isDrawerOpen) {
  return (dispatch) => {
    dispatch({ type: 'SET_IS_DRAWER_OPEN', payload: isDrawerOpen });
  };
}

export function getLotData() {
  return async (dispatch) => {
    let columns = LotService.getTableColumns();
    const lots = await LotService.getPaginationWiseLots();
    dispatch({type:'SET_INITIAL_LOT_DATA',payload:{columns,lots}})
  };
}


export function addLot(Lot) {
  return async (dispatch) => {
    const clonedLot = { ...Lot,  sizes: LotService.getSizeWiseObject(Lot.sizes), status: 'Initiated',companyId:'1'};
    let result = await LotService.addLotData(clonedLot);
    if(result.status === 200){
      message.success('Successfully added');
      dispatch(getLotData());
    }
  };
}