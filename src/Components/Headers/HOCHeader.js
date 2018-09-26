import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/hoc/isAuth" activeClassName="is-active">
      isAuth
    </NavLink>
    <NavLink to="/hoc/isAdmin" activeClassName="is-active">
      isAdmin
    </NavLink>
  </header>
);

export default Header;
