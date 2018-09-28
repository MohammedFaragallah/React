import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Components/Headers/Header';
import NotFoundPage from '../Components/Utils/NotFoundPage';
import Landing from '../Components/Utils/Landing';
// Headers componentes
import ExpensesHeader from '../Components/Headers/ExpensesHeader';
import AioHeader from '../Components/Headers/AioHeader';
import PortfolioHeader from '../Components/Headers/PortfolioHeader';
import HOCHeader from '../Components/Headers/HOCHeader';
import BurgerHeader from '../Components/Headers/BurgerHeader';
// AIO componentes
import Counter from '../Components/Counter/Counter';
import ClassCounter from '../Components/Counter/ClassCounter';
import IndecisionMEAD from '../Components/Indecision/Indecision - MEAD';
import Indecision from '../Components/Indecision/Indecision';
import ClassVtoggle from '../Components/Vtoggle/ClassVtoggle';
import Vtoggle from '../Components/Vtoggle/Vtoggle';
// Expenses componentes
import ExpenseDashboardPage from '../Components/Expenses/ExpenseDashboardPage';
import AddExpensePage from '../Components/Expenses/AddExpensePage';
import EditExpensePage from '../Components/Expenses/EditExpensePage';
import HelpPage from '../Components/Expenses/HelpPage';
// Portfolio componentes
import Portfolio from '../Components/Portfolio/Portfolio';
import PortfolioID from '../Components/Portfolio/PortfolioID';
import Contact from '../Components/Portfolio/Contact';
// BurgerBuilder
import Container from '../Components/BurgerBuilder/containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../Components/BurgerBuilder/containers/Checkout/Checkout';
import Orders from '../Components/BurgerBuilder/containers/Orders/Orders';
// HOC
import { AdminInfo, AdminAuth } from '../Components/HOC/HOC';
// POST
import Post from '../Components/Post/containers/Blog/Blog';
// Persons componentes
import { Persons } from '../Components/Person/Persons';
import AdvancedCounter from '../Components/AdvancedCounter/containers/Counter/Counter';
import Layout from '../Components/BurgerBuilder/components/Layout/Layout';
import EmailyHeader from '../Components/Headers/EmailyHeader';
import Emaily from '../Components/Emaily/Emaily';
const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Layout />

      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/aio" component={AioHeader} />
        <Route path="/expenses" component={ExpensesHeader} />
        <Route path="/portfolio" component={PortfolioHeader} />
        <Route path="/hoc" component={HOCHeader} />
        <Route path="/persons" component={Persons} />
        <Route path="/burger" component={BurgerHeader} />
        <Route path="/post" component={Post} />
        <Route path="/advancedCounter" component={AdvancedCounter} />
        <Route path="/emaily" component={EmailyHeader} />

        <Route component={NotFoundPage} />
      </Switch>

      <Route path="/aio/counter" component={Counter} />
      <Route path="/aio/classCounter" component={ClassCounter} />
      <Route path="/aio/indecisionmead" component={IndecisionMEAD} />
      <Route path="/aio/Indecision" component={Indecision} />
      <Route path="/aio/classVtoggle" component={ClassVtoggle} />
      <Route path="/aio/vtoggle" component={Vtoggle} />

      <Route
        path="/expenses"
        render={() => <Redirect to="/expenses/dashboard" />}
      />
      <Route path="/expenses/dashboard" component={ExpenseDashboardPage} />
      <Route path="/expenses/create" component={AddExpensePage} />
      <Route path="/expenses/edit" component={EditExpensePage} exact />
      <Route path="/expenses/edit/:id" component={EditExpensePage} />
      <Route path="/expenses/help" component={HelpPage} />

      <Route path="/portfolio/porftolio" component={Portfolio} />
      <Route path="/portfolio/porftolio/:id" component={PortfolioID} />
      <Route path="/portfolio/contact" component={Contact} />

      <Route
        path="/hoc/isAdmin"
        component={props => <AdminInfo {...props} isAdmin />}
      />
      <Route
        path="/hoc/isAuth"
        component={props => <AdminAuth {...props} isAuthinticated={false} />}
      />

      <Route path="/burger" render={() => <Redirect to="/burger/builder" />} />
      <Route path="/burger/builder" component={Container} />
      <Route path="/burger/checkout" component={Checkout} />
      <Route path="/burger/orders" component={Orders} />
      <Route
        path="/emaily"
        render={() => <Redirect to="/emaily/dashboard" />}
      />
      <Route path="/emaily/dashboard" component={Emaily} />
    </div>
  </BrowserRouter>
);

export default Routes;
