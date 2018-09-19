import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/portfolio/porftolio" activeClassName="is-active" exact={true}>
      Porftolio
    </NavLink>
    <NavLink to="/portfolio/contact" activeClassName="is-active" exact={true}>
      contact
    </NavLink>
  </header>
);

export default Header;
