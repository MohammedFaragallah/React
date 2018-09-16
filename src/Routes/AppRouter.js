import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Components/Headers/Header';
import NotFoundPage from '../Components/Utils/NotFoundPage';
import Landing from '../Components/Utils/Landing';
// Headers componentes
import ExpensesHeader from '../Components/Headers/ExpensesHeader';
import AioHeader from '../Components/Headers/AioHeader';
import PortfolioHeader from '../Components/Headers/PortfolioHeader';
import HOCHeader from '../Components/Headers/HOCHeader';
// AIO componentes
import Counter from '../Components/counter/counter';
import ClassCounter from '../Components/counter/classCounter';
import IndecisionMEAD from '../Components/Indecision/Indecision - MEAD';
import Indecision from '../Components/Indecision/Indecision';
import ClassVtoggle from '../Components/Vtoggle/classVtoggle';
import Vtoggle from '../Components/Vtoggle/Vtoggle';
// Expenses componentes
import ExpenseDashboardPage from '../Components/Expenses/ExpenseDashboardPage';
import AddExpensePage from '../Components/Expenses/AddExpensePage';
import EditExpensePage from '../Components/Expenses/EditExpensePage';
import HelpPage from '../Components/Expenses/HelpPage';
// Portfolio componentes
import Portfolio from '../Components/portfolio/Portfolio';
import PortfolioID from '../Components/portfolio/PortfolioID';
import Contact from '../Components/portfolio/contact';

import { AdminInfo, AdminAuth } from '../Components/HOC/hoc';

import { Persons } from '../Components/Person/Persons';
const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/aio" component={AioHeader} />
        <Route path="/expenses" component={ExpensesHeader} />
        <Route path="/portfolio" component={PortfolioHeader} />
        <Route path="/hoc" component={HOCHeader} />
        <Route path="/persons" component={Persons} />

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
      <Route path="/expenses/edit" component={EditExpensePage} exact={true} />
      <Route path="/expenses/edit/:id" component={EditExpensePage} />
      <Route path="/expenses/help" component={HelpPage} />

      <Route path="/portfolio/porftolio" component={Portfolio} />
      <Route path="/portfolio/porftolio/:id" component={PortfolioID} />
      <Route path="/portfolio/contact" component={Contact} />

      <Route
        path="/hoc/isAdmin"
        component={props => <AdminInfo {...props} isAdmin={true} />}
      />
      <Route
        path="/hoc/isAuth"
        component={props => <AdminAuth {...props} isAuthinticated={false} />}
      />
    </div>
  </BrowserRouter>
);

export default Routes;
