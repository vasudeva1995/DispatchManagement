import { message } from 'antd';
import RetailerBillService from './RetailerBillService';
import 'antd/es/message/style/css';

export function toggleDrawer(isDrawerOpen) {
  return (dispatch) => {
    dispatch({ type: 'SET_IS_DRAWER_OPEN', payload: isDrawerOpen });
  };
}

export function getBillDataOnMount(paginationConfig, statusList) {
  return async (dispatch) => {
    const columns = RetailerBillService.getTableColumns(statusList);
    let dataStores = await RetailerBillService.getDataStores();
    dataStores = RetailerBillService.formatDataStores(dataStores);
    const bills = await RetailerBillService.getPaginationWiseBills(paginationConfig);
    const billsMap = RetailerBillService.convertListToMap(bills, 'billNo');
    dispatch({
      type: 'SET_INITIAL_BILL_DATA',
      payload: {
        columns, billsMap, bills, paginationConfig, dataStores,
      },
    });
  };
}

export function getBillData(paginationConfig) {
  return async (dispatch) => {
    let bills = await RetailerBillService.getPaginationWiseBills(paginationConfig);
    if (!bills.length) {
      paginationConfig = { ...paginationConfig, pageNumber: paginationConfig.pageNumber - 1, range: [paginationConfig.range[0] - paginationConfig.pageSize, paginationConfig.range[1] - paginationConfig.pageSize] };
      bills = await RetailerBillService.getPaginationWiseLots(paginationConfig);
    }
    const billsMap = RetailerBillService.convertListToMap(bills, 'billNo');
    dispatch({ type: 'SET_BILL_DATA', payload: { bills, billsMap, paginationConfig } });
  };
}


export function addBill(bill) {
  return async (dispatch) => {
    const totalAmount = RetailerBillService.getTotalAmount(bill.sizeJson);
    const clonedLot = {
      ...bill, sizeJson: RetailerBillService.getSizeWiseObject(bill.sizeJson), totalAmount, amountPaid: 0, companyId: '1',
    };
    const result = await RetailerBillService.addBillData(clonedLot);
    if (result.status === 200) {
      message.success('Successfully added');
      dispatch(getBillData({
        range: [1, 10],
        pageNumber: 1,
        pageSize: 10,
      }));
    } else {
      message.error(result.response.data.message);
    }
  };
}

export function updateAmountPaid(billNo, amount, billsMap) {
  return async (dispatch) => {
    const amountPaid = parseInt(amount, 10) + parseInt(billsMap[billNo].amountPaid, 10);
    const result = await RetailerBillService.updateAmountPaid(billNo, amountPaid);
    if (result.status === 200) {
      dispatch(getBillData({
        range: [1, 10],
        pageNumber: 1,
        pageSize: 10,
      }));
      message.success('Amount updated successfully');
    } else {
      message.error('Unable to update amount');
    }
  };
}
