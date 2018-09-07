import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/aio" activeClassName="is-active">
      AIO
    </NavLink>
    <NavLink to="/expenses" activeClassName="is-active">
      Expenses
    </NavLink>

    <NavLink to="/portfolio" activeClassName="is-active">
      Portfolio
    </NavLink>
  </header>
);

export default Header;
