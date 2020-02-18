import LotService from './LotService';
import { message } from 'antd';
import 'antd/es/message/style/css';

export function toggleDrawer(isDrawerOpen) {
  return (dispatch) => {
    dispatch({ type: 'SET_IS_DRAWER_OPEN', payload: isDrawerOpen });
  };
} 

export function getLotDataOnMount(paginationConfig,statusMap) {
  return async (dispatch) => {
    let columns = LotService.getTableColumns(statusMap);
    let dataStores = await LotService.getDataStores();
    dataStores = LotService.formatDataStores(dataStores);
    let lots = await LotService.getPaginationWiseLots(paginationConfig);
    if(!lots.length)
    {
      paginationConfig = {...paginationConfig , pageNumber: paginationConfig.pageNumber - 1, range:[paginationConfig.range[0] - paginationConfig.pageSize , paginationConfig.range[1] - paginationConfig.pageSize]};
      lots = await LotService.getPaginationWiseLots(paginationConfig);
    }
    dispatch({type:'SET_INITIAL_LOT_DATA',payload:{columns,lots,paginationConfig,dataStores}})
  };
}

export function getLotData(paginationConfig,statusMap) {
  return async (dispatch) => {
    let lots = await LotService.getPaginationWiseLots(paginationConfig);
    if(!lots.length)
    {
      paginationConfig = {...paginationConfig , pageNumber: paginationConfig.pageNumber - 1, range:[paginationConfig.range[0] - paginationConfig.pageSize , paginationConfig.range[1] - paginationConfig.pageSize]};
      lots = await LotService.getPaginationWiseLots(paginationConfig);
    }
    dispatch({type:'SET_LOT_DATA',payload:{lots,paginationConfig}})
  };
}


export function addLot(Lot,statusMap) {
  return async (dispatch) => {
    const clonedLot = { ...Lot,  sizes: LotService.getSizeWiseObject(Lot.sizes), status: 'Initiated',companyId:'1'};
    let result = await LotService.addLotData(clonedLot);
    if(result.status === 200){
      message.success('Successfully added');
      dispatch(getLotData({
        range:[1,10],
        pageNumber:1,
        pageSize:10
      },statusMap));
    }
    else
    {
      message.error(result.response.data.message);
    }
  };
}