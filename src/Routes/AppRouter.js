import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Components/Headers/Header';
import NotFoundPage from '../Components/Utils/NotFoundPage';
import Landing from '../Components/Utils/Landing';

import ExpensesHeader from '../Components/Headers/ExpensesHeader';
import AioHeader from '../Components/Headers/AioHeader';
import PortfolioHeader from '../Components/Headers/PortfolioHeader';
// AIO componentes
import Counter from '../Components/counter/counter';
import ClassCounter from '../Components/counter/classCounter';
import IndecisionMEAD from '../Components/Indecision/Indecision - MEAD';
import Indecision from '../Components/Indecision/Indecision';
import ClassVtoggle from '../Components/Vtoggle/classVtoggle';
import Vtoggle from '../Components/Vtoggle/Vtoggle';

import ExpenseDashboardPage from '../Components/Expenses/ExpenseDashboardPage';
import AddExpensePage from '../Components/Expenses/AddExpensePage';
import EditExpensePage from '../Components/Expenses/EditExpensePage';
import HelpPage from '../Components/Expenses/HelpPage';

import Portfolio from '../Components/portfolio/Portfolio';
import PortfolioID from '../Components/portfolio/PortfolioID';
import Contact from '../Components/portfolio/contact';
const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/aio" component={AioHeader} />
        <Route path="/expenses" component={ExpensesHeader} />
        <Route path="/portfolio" component={PortfolioHeader} />

        <Route component={NotFoundPage} />
      </Switch>

      <Route path="/aio/counter" component={Counter} />
      <Route path="/aio/classCounter" component={ClassCounter} />
      <Route path="/aio/indecisionmead" component={IndecisionMEAD} />
      <Route path="/aio/Indecision" component={Indecision} />
      <Route path="/aio/classVtoggle" component={ClassVtoggle} />
      <Route path="/aio/vtoggle" component={Vtoggle} />

      <Route path="/expenses/dashboard" component={ExpenseDashboardPage} />
      <Route path="/expenses/create" component={AddExpensePage} />
      <Route path="/expenses/edit" component={EditExpensePage} />
      <Route path="/expenses/help" component={HelpPage} />

      <Route path="/portfolio/porftolio" component={Portfolio} />
      <Route path="/portfolio/porftolio/:id" component={PortfolioID} />
      <Route path="/portfolio/contact" component={Contact} />
    </div>
  </BrowserRouter>
);

export default Routes;
