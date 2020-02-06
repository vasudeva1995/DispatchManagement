import * as api from '../../api';

const simpleAction = (url) => async (dispatch) => {
  const result = await api.GET(url);
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: result.data ? result.data : [],
  });
};

export default simpleAction;
