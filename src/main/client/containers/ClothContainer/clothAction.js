import * as api from '../../api';

export const GET_CLOTH_DATA = 'app/cloth/GET_CLOTH_DATA';
export const ADD_CLOTH_DATA = 'app/cloth/ADD_CLOTH_DATA';


export const getClothData = () => async (dispatch) => {
  const url = '/app/rest/v1/cloth';
  const result = await api.GET(url);
  if (result.data) {
    dispatch({
      type: GET_CLOTH_DATA,
      payload: result.data,
    });
  } else {
    console.log('SERVER ERROR');
  }
};

export const addClothData = (data, resolve, reject) => async (dispatch) => {
  const url = '/app/rest/v1/add-cloth';
  const result = await api.POST(url, data);
  if (result.data) {
    dispatch({
      type: ADD_CLOTH_DATA,
      payload: result.data,
    });
    resolve('success');
  } else {
    console.log('SERVER ERROR');
    reject('server error');
  }
};
