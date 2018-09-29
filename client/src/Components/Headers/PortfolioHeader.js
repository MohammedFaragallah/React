import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/portfolio/porftolio" activeClassName="is-active" exact>
      Porftolio
    </NavLink>
    <NavLink to="/portfolio/contact" activeClassName="is-active" exact>
      contact
    </NavLink>
  </header>
);

export default Header;
