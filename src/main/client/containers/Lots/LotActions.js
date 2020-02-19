import { message } from 'antd';
import LotService from './LotService';
import 'antd/es/message/style/css';

export function toggleDrawer(isDrawerOpen) {
  return (dispatch) => {
    dispatch({ type: 'SET_IS_DRAWER_OPEN', payload: isDrawerOpen });
  };
}

export function getLotDataOnMount(paginationConfig, statusList) {
  return async (dispatch) => {
    const columns = LotService.getTableColumns(statusList);
    let dataStores = await LotService.getDataStores();
    dataStores = LotService.formatDataStores(dataStores);
    let lots = await LotService.getPaginationWiseLots(paginationConfig);
    lots = LotService.setStatusToLots(lots, statusList);
    const lotsMap = LotService.convertListToMap(lots, 'lotNo');
    dispatch({
      type: 'SET_INITIAL_LOT_DATA',
      payload: {
        columns, lotsMap, lots, paginationConfig, dataStores,
      },
    });
  };
}

export function getLotData(paginationConfig, statusList) {
  return async (dispatch) => {
    let lots = await LotService.getPaginationWiseLots(paginationConfig);
    if (!lots.length) {
      paginationConfig = { ...paginationConfig, pageNumber: paginationConfig.pageNumber - 1, range: [paginationConfig.range[0] - paginationConfig.pageSize, paginationConfig.range[1] - paginationConfig.pageSize] };
      lots = await LotService.getPaginationWiseLots(paginationConfig);
    }
    lots = LotService.setStatusToLots(lots, statusList);
    const lotsMap = LotService.convertListToMap(lots, 'lotNo');
    dispatch({ type: 'SET_LOT_DATA', payload: { lots, lotsMap, paginationConfig } });
  };
}


export function addLot(Lot, statusList) {
  return async (dispatch) => {
    const clonedLot = {
      ...Lot, sizes: LotService.getSizeWiseObject(Lot.sizes), status: 'Initiated', companyId: '1',
    };
    const result = await LotService.addLotData(clonedLot);
    if (result.status === 200) {
      message.success('Successfully added');
      dispatch(getLotData({
        range: [1, 10],
        pageNumber: 1,
        pageSize: 10,
      }, statusList));
    } else {
      message.error(result.response.data.message);
    }
  };
}

export function moveToNextStatus(lotNo, challans, status, statusList) {
  return async (dispatch) => {
    const result = await LotService.moveToNextStatus(lotNo, JSON.stringify(challans), status);
    if (result.status === 200) {
      dispatch(getLotData({
        range: [1, 10],
        pageNumber: 1,
        pageSize: 10,
      }, statusList));
      message.success('Status updated successfully');
    } else {
      message.error('Unable to update status');
    }
  };
}
