import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/expenses/dashboard" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/expenses/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/expenses/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/expenses/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;
