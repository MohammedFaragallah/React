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
    <NavLink to="/post" activeClassName="is-active">
      Post
    </NavLink>
    <NavLink to="/advancedCounter" activeClassName="is-active">
      Advanced Counter
    </NavLink>
    <NavLink to="/emaily" activeClassName="is-active">
      Emaily
    </NavLink>
  </header>
);

export default Header;
