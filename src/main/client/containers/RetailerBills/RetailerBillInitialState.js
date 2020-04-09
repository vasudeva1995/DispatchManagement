import { Record } from 'immutable';

const InitialState = Record({
  isDrawerOpen: false,
  columns: [],
  billsMap: {},
  bills: [],
  dataStores: {},
  paginationConfig: {},
});

export default new InitialState();
