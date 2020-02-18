import * as api from '../../api';
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