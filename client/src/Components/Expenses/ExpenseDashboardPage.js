import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListFilters from './ExpensesListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <p>This is from my dashboard component!</p>
    <ExpenseList />
    <ExpensesListFilters />
  </div>
);

export default ExpenseDashboardPage;
