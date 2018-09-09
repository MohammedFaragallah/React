import { createStore, combineReducers } from 'redux';
import {
  addExpense,
  editExpense,
  removeExpense,
  setText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from './actions';

import expensesReducer from './expensesreducer';
import filtersReducer from './filtersReducer';

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

const getVisible = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        // console.log(a, b);
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisible(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// store.dispatch(
//   addExpense({
//     description: 'rent',
//     note: 'notetest',
//     amount: 3,
//     createdAt: -1000,
//   })
// );

// store.dispatch(
//   addExpense({
//     description: 'asd',
//     note: 'notetest',
//     amount: 500,
//     createdAt: 1000,
//   })
// );
// store.dispatch(
//   addExpense({
//     description: 'asd',
//     note: 'notetest',
//     amount: 999,
//     createdAt: -21000,
//   })
// );
// store.dispatch(
//   addExpense({
//     description: 'asd',
//     note: 'notetest',
//     amount: 16,
//     createdAt: 12000,
//   })
// );

// store.dispatch(removeExpense({ id: one.expense.id }));

// store.dispatch(editExpense(two.expense.id, { amount: 500 }));

// store.dispatch(setText());
// store.dispatch(sortByDate('date'));
// store.dispatch(sortByAmount('amount'));

// const expenseOne = store.dispatch(
//   addExpense({
//     description: 'Rent',
//     amount: 100,
//   })
// );

// const expenseTwo = store.dispatch(
//   addExpense({ description: 'Coffee', amount: 300 })
// );

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setText('rent')); // endDate 1250
