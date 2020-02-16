import { Record } from 'immutable';

const InitialState = Record({
  isDrawerOpen: false,
  columns: [],
  lots: [],
  statusMap: {
    'Initiated':'Taylor',
    'Taylor':'Washing',
    'Washing': 'Packing',
    'Packing' : 'In Stock'
  },
  paginationConfig:{}
});

export default new InitialState();
