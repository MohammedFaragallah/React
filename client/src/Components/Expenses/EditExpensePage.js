import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {
  startRemoveExpense,
  startEditExpense,
} from '../../redux/actions/expenses';

const EditExpensePage = props => (
  <div>
    <p>This is from my edit expense component</p>
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        props.dispatch(startEditExpense(props.expense.id, expense));
        props.history.push('/expenses/dashboard');
      }}
    />
    <button
      onClick={() => {
        props.dispatch(startRemoveExpense({ id: props.expense.id }));
        props.history.push('/expenses/dashboard');
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
