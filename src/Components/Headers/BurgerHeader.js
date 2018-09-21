import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/burger/builder" activeClassName="is-active">
      Builder
    </NavLink>
    <NavLink to="/burger/checkout" activeClassName="is-active">
      Checkout
    </NavLink>
    <NavLink to="/burger/checkout/contact-data" activeClassName="is-active">
      Contact Data
    </NavLink>
    <NavLink to="/burger/orders" activeClassName="is-active">
      Orders
    </NavLink>
  </header>
);

export default Header;
