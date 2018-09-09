import uuid from 'uuid';

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id,
  },
});

const setText = (text = '') => ({
  type: 'SET_TEXT',
  text,
});

const sortByDate = (sortBy = '') => ({
  type: 'SORT_BY_DATE',
  sortBy,
});

const sortByAmount = (sortBy = '') => ({
  type: 'SORT_BY_AMOUNT',
  sortBy,
});

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate,
});

const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate,
});

export {
  addExpense,
  editExpense,
  removeExpense,
  setText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
};
