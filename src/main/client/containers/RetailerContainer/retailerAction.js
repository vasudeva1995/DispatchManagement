import retailerService from './retailerService';

export const GET_RETAILER_DATA = 'app/retailer/GET_RETAILER_DATA';
export const ADD_RETAILER_DATA = 'app/retailer/ADD_RETAILER_DATA';


export const getRetailerData = () => async (dispatch) => {
  const retailers = await retailerService.getAllRetailerData();
  if (retailers) {
    dispatch({
      type: GET_RETAILER_DATA,
      payload: retailers,
    });
  } else {
    console.log('SERVER ERROR');
  }
};

export const addRetailer = (data, resolve, reject) => async (dispatch) => {
  const retailerData = await retailerService.addRetailer(data);
  if (retailerData) {
    dispatch({
      type: ADD_RETAILER_DATA,
      payload: retailerData,
    });
    resolve('success');
  } else {
    console.log('SERVER ERROR');
    reject('server error');
  }
};
