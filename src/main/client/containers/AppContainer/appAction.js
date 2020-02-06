import * as api from '../../api';

const simpleAction = (data) => async (dispatch) => {
  const result = await api.GET(data);
  console.log(result);
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: data,
  });
};

export default simpleAction;
