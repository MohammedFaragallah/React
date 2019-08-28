import database from '../../firebase/fierbase';
import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE,
  SET_EXPENSES,
} from './actionTypes';

const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense,
});

const startAddExpense = (expenseData = {}) => dispatch => {
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = expenseData;
  const expense = { description, note, amount, createdAt };
  database
    .ref('expenses')
    .push(expense)
    .then(ref => {
      dispatch(addExpense({ id: ref.key, ...expense }));
    });
};

const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates,
});

const startEditExpense = (id, updates) => dispatch => {
  database
    .ref(`expenses/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editExpense(id, updates));
    });
};

const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  expense: {
    id,
  },
});

const startRemoveExpense = ({ id } = {}) => dispatch =>
  database
    .ref(`expenses/${id}`)
    .remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    });

const setExpenses = expenses => ({
  type: SET_EXPENSES,
  expenses,
});

const startSetExpenses = () => dispatch =>
  database
    .ref('expenses')
    .once('value')
    .then(snapshot => {
      const expenses = [];
      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(setExpenses(expenses));
    });

export {
  removeExpense,
  editExpense,
  addExpense,
  startAddExpense,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
};
