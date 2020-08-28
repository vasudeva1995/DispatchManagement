import * as api from '../../api';
import clothService from "./clothService";

export const GET_CLOTH_DATA = 'app/cloth/GET_CLOTH_DATA';
export const ADD_CLOTH_DATA = 'app/cloth/ADD_CLOTH_DATA';


export const getClothData = () => async (dispatch) => {
  const clothData = await clothService.getAllClothData();
  if (clothData) {
    dispatch({
      type: GET_CLOTH_DATA,
      payload: clothData,
    });
  } else {
    console.log('SERVER ERROR');
  }
};

export const addClothData = (data, resolve, reject) => async (dispatch) => {
  const clothData = await clothService.addCloth(data);
  if (clothData) {
    dispatch({
      type: ADD_CLOTH_DATA,
      payload: clothData,
    });
    resolve('success');
  } else {
    console.log('SERVER ERROR');
    reject('server error');
  }
};
