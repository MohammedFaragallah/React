import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectExpenses from '../../redux/selectors/expenses';

export const ExpenseList = props => (
  <div>
    <h1>expenses ExpenseList</h1>
    {props.expenses.length === 0 ? (
      <p>No expenses added or matching your filter</p>
    ) : (
      <div className="section">
        {props.expenses.map(expense => (
          <ExpensesListItem key={expense.id} {...expense} />
        ))}
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
