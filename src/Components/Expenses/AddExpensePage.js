import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../../redux/actions/expenses';

const AddExpensePage = props => (
  <div>
    <p>This is from my add expense component</p>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(startAddExpense(expense));
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
