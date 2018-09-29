import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ExpenseDashboardPage from '../Components/Expenses/ExpenseDashboardPage';
import AddExpensePage from '../Components/Expenses/AddExpensePage';
import EditExpensePage from '../Components/Expenses/EditExpensePage';
import HelpPage from '../Components/Expenses/HelpPage';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/expenses/dashboard" component={ExpenseDashboardPage} />
      <Route path="/expenses/create" component={AddExpensePage} />
      <Route path="/expenses/edit" component={EditExpensePage} />
      <Route path="/expenses/edit/:id" component={EditExpensePage} />
      <Route path="/expenses/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

export default Routes;
