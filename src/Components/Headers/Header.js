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
    <NavLink to="/hoc" activeClassName="is-active">
      HOC
    </NavLink>
    <NavLink to="/persons" activeClassName="is-active">
      Persons
    </NavLink>
    <NavLink to="/burger" activeClassName="is-active">
      BurgerBuilder
    </NavLink>
  </header>
);

export default Header;
