import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExpensesHeader from '../Components/Headers/ExpensesHeader';
import AioHeader from '../Components/Headers/AioHeader';
import PortfolioHeader from '../Components/Headers/PortfolioHeader';

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
      <Route path="/expenses/help" component={HelpPage} />

    </div>
  </BrowserRouter>
);

export default Routes;
