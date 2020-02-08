import * as api from '../../api';

export const GET_CLOTH_DATA = 'app/cloth/GET_CLOTH_DATA';


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
