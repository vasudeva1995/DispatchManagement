import { Record } from 'immutable';

const InitialState = Record({
  isDrawerOpen: false,
  columns: [],
  lotsMap: {},
  lots: [],
  statusMap: {
    'Initiated':'Tailor',
    'Tailor':'Washing',
    'Washing': 'Packing',
    'Packing' : 'In Stock'
  },
  dataStores:{},
  paginationConfig:{}
});

export default new InitialState();
