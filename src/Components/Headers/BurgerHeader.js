import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/burger/builder" activeClassName="is-active">
      Builder
    </NavLink>
  </header>
);

export default Header;
